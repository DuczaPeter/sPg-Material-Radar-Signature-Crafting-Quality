# Privacy

## Summary

The current production artifact is a client-side single-file HTML application. It has no project-owned backend, user account system or embedded analytics script.

## Data stored locally

The application uses browser `localStorage` for the UI language preference under the project's own key. The current production build does not implement the planned last-known-good mining-data cache.

Users can remove the stored preference through the browser's site-data/local-storage controls.

## External network requests

On page load the application attempts to request the KrovaxCode / SCMDB_DATA LIVE manifest and current mining data from `raw.githubusercontent.com`.

The current build also starts ship-weapon blueprint requests against a pinned `StarCitizenWiki/scunpacked-data` GitHub commit.

Opening external source/item links can navigate to Star Citizen Wiki API, UEX, SCMDB, CStone or RSI pages.

These third-party requests are made directly by the user's browser. The third-party service can therefore receive ordinary connection metadata such as IP address, user agent, request time and standard HTTP headers. Their own privacy policies apply.

## Not present in the current application

- no first-party account/login;
- no first-party server storage;
- no payment handling;
- no embedded Google Analytics, Microsoft Clarity or equivalent analytics code detected in the canonical release HTML;
- no project-owned telemetry endpoint;
- no last-known-good external-data cache yet.

## Scope warning

This document describes the canonical release artifact identified in `VERSION.json`. Future features must update this file if they add new storage, analytics, authentication, server calls or external services.
