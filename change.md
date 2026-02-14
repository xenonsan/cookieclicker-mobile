# Changes

This document summarizes the changes made to the application.

## PWA Conversion

- Updated `manifest.json` to define the application as a Progressive Web App, including custom icons provided by the user.
- Updated `sw.js` to enable offline functionality by caching essential assets, including the new custom icons.
- Updated `index.html` to link to the manifest and register the service worker.

## Ad Removal

- Removed all ad-related scripts and HTML elements from `index.html`.
- Deleted the `showads.js` file.

## Cookie Consent Banner
- Removed the cookie consent banner script from `index.html`.

## Top Bar
- The top bar is now hidden using CSS (`display: none;`) to prevent it from affecting the game loading.
- The game layout has been adjusted to fill the full screen.

## Zooming
- Disabled pinch-to-zoom and double-tap-to-zoom by setting `touch-action: none;` on the `body` element in `style.css`.
- Added a JavaScript event listener to `index.html` to prevent the `gesturestart` event, which should further prevent pinch-to-zoom on iPad.

## Fullscreen and Scrolling
- The changes made to force fullscreen and disable scrolling have been reverted as per user request. This includes restoring `min-width` on `#wrapper` and `overflow-y: scroll;` on `#centerArea` and `#sectionRight` in `style.css`.
