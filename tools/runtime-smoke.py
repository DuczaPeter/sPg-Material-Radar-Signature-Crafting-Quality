#!/usr/bin/env python3
import asyncio
import json
from pathlib import Path
from datetime import datetime, timezone

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / "index.html").read_text(encoding="utf-8")
ART = ROOT / "test-artifacts"
SHOTS = ART / "screenshots"
ASSETS = ROOT / "assets"
ART.mkdir(exist_ok=True)
SHOTS.mkdir(exist_ok=True)
ASSETS.mkdir(exist_ok=True)

VIEWPORTS = [
    ("desktop", 1440, 1000),
    ("mobile", 390, 844),
]

LOCAL_STORAGE_MOCK = """
() => {
  const store = {};
  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    value: {
      getItem: k => Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null,
      setItem: (k, v) => { store[k] = String(v); },
      removeItem: k => { delete store[k]; },
      clear: () => { for (const k of Object.keys(store)) delete store[k]; }
    }
  });
}
"""

async def one(page, label, width, height):
    page_errors = []
    blocked_requests = []
    console_network_errors = []
    page.on("pageerror", lambda exc: page_errors.append(str(exc)))
    page.on("console", lambda msg: console_network_errors.append(msg.text) if msg.type == "error" and "Failed to load resource" in msg.text else None)

    async def route_handler(route):
        url = route.request.url
        if url.startswith(("http://", "https://")):
            blocked_requests.append(url)
            await route.abort()
        else:
            await route.continue_()

    await page.route("**/*", route_handler)
    await page.evaluate(LOCAL_STORAGE_MOCK)
    await page.set_content(HTML, wait_until="domcontentloaded")
    await page.wait_for_timeout(1800)

    initial_rows = await page.locator(".radar-row").count()
    old_craft = await page.locator("#craftOnly").count() > 0
    place_buttons = await page.locator("#placeAll, #placeSurface, #placeSpace").count()

    await page.click("#placeSurface")
    await page.wait_for_timeout(120)
    surface_rows = await page.locator(".radar-row").count()
    surface_active = "active" in (await page.locator("#placeSurface").get_attribute("class") or "")

    await page.click("#placeSpace")
    await page.wait_for_timeout(120)
    space_rows = await page.locator(".radar-row").count()
    space_active = "active" in (await page.locator("#placeSpace").get_attribute("class") or "")

    # Open one material row for a meaningful screenshot.
    if space_rows:
        await page.locator(".radar-row").first.click()
        await page.wait_for_timeout(120)

    await page.screenshot(path=str(SHOTS / f"ui-{label}.png"), full_page=False)
    await page.screenshot(path=str(ASSETS / f"ui-{label}.png"), full_page=False)

    await page.click("#placeAll")
    await page.wait_for_timeout(120)
    restored_rows = await page.locator(".radar-row").count()

    await page.click("#targetMiningToggle")
    await page.wait_for_timeout(100)
    target_open = "open" in (await page.locator("#targetMiningPanel").get_attribute("class") or "")

    overflow = await page.evaluate("Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)")

    await page.select_option("#language", "en")
    await page.wait_for_timeout(100)
    html_lang = await page.get_attribute("html", "lang")
    labels = [await page.locator(sel).inner_text() for sel in ("#placeAll", "#placeSurface", "#placeSpace")]
    fallback_text = await page.locator("#scmdbLiveStatus").inner_text()

    passed = (
        initial_rows > 0 and not old_craft and place_buttons == 3 and
        surface_rows > 0 and surface_active and space_rows > 0 and space_active and
        restored_rows == initial_rows and target_open and overflow == 0 and
        html_lang == "en" and labels == ["All locations", "Surface", "Space"] and
        len(page_errors) == 0
    )

    return {
        "viewport": {"width": width, "height": height},
        "initial_rows": initial_rows,
        "old_craft_only_present": old_craft,
        "place_button_count": place_buttons,
        "page_error_count": len(page_errors),
        "page_errors": page_errors,
        "blocked_network_request_count": len(blocked_requests),
        "surface_rows": surface_rows,
        "surface_active": surface_active,
        "space_rows": space_rows,
        "space_active": space_active,
        "restored_rows": restored_rows,
        "target_panel_open": target_open,
        "horizontal_overflow_px": overflow,
        "html_lang_after_english": html_lang,
        "english_place_labels": labels,
        "fallback_status_text": fallback_text,
        "screenshot": f"test-artifacts/screenshots/ui-{label}.png",
        "pass": passed,
    }

async def main():
    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            executable_path="/usr/bin/chromium",
            args=["--no-sandbox", "--disable-gpu"],
        )
        for label, width, height in VIEWPORTS:
            page = await browser.new_page(viewport={"width": width, "height": height})
            results.append(await one(page, label, width, height))
            await page.close()
        await browser.close()

    summary = {
        "run_date": datetime.now(timezone.utc).isoformat(),
        "harness": "Chromium via Playwright; packaged HTML injected into about:blank; localStorage mocked because opaque origin denies native localStorage; all external HTTP(S) requests intentionally aborted.",
        "network_condition": "OFFLINE/FALLBACK — external requests deliberately blocked",
        "scope": "Runtime interaction/responsive smoke and real UI screenshot capture. Does not verify LIVE third-party fetches.",
        "evidence_level": "RUNTIME VERIFIED",
        "status": "PASS" if all(x["pass"] for x in results) else "FAIL",
        "tests": results,
        "notes": [
            "Blocked network requests are intentional and are not counted as application JavaScript failures.",
            "The screenshots are real renders of the packaged artifact under this documented fallback condition."
        ]
    }
    (ART / "runtime-fallback-summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    raise SystemExit(0 if summary["status"] == "PASS" else 1)

if __name__ == "__main__":
    asyncio.run(main())
