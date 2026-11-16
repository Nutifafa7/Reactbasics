# Mount Zion Music Client Portal

Standalone installable web app (PWA). Plain HTML, CSS and JavaScript: no build step, no external libraries.

Files: index.html, styles.css, app.js, manifest.json, sw.js, logo.png, icons/.

Run locally: serve this folder over HTTP (for example `python3 -m http.server`) and open it in a browser.
Deploy: Netlify with base directory `mount-zion-portal` and publish directory `.`; no build command.
Data is stored in the browser (localStorage) on each device.
