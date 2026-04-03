# Project Guidelines

## Code Style

Use consistent camelCase for HTML element IDs (e.g., `txtFirstName` instead of `txtfirstname`). Reference [StringIntro.html](StringIntro.html) and [StringIntro.js](StringIntro.js) for current patterns.

## Architecture

This is a simple vanilla JavaScript application with direct HTML-JS coupling. Components include an HTML form for user input and a JavaScript event handler for processing. No frameworks or complex boundaries needed for this educational demo.

## Build and Test

No build process required. Open [StringIntro.html](StringIntro.html) directly in a browser to run. No automated tests present.

## Conventions

Form submissions use `alert()` for output (consider upgrading to DOM updates for better UX). Always validate form inputs before processing. Avoid unused DOM elements like `<p id="pResult">` in [StringIntro.html](StringIntro.html).

See [README.md](README.md) for project overview.