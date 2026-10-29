# GemRadar Mobile

A mobile-first, installable web app inspired by token-feed dashboards. It is an independent project and is not affiliated with Gembot.io.

## Features
- Live public market data from DexScreener API
- Solana token feed based on recently boosted token profiles and available token pairs
- Market cap/FDV, 24-hour volume, liquidity, 24-hour change, token age
- Search and filters
- Configurable gold crown badges based on user-set thresholds
- Optional browser notifications for newly seen tokens that match crown rules (while the page is open)
- Built-in candlestick chart modal using Lightweight Charts and public GeckoTerminal OHLCV data
- Mobile PWA manifest and installable layout

## Since-callout percentage
The app stores the market cap/FDV it first observes for each token in this browser's local storage and calculates change relative to that first observation. This is a **local first-seen baseline**, not an official Gembot callout price; it resets if site data is cleared and is not shared across devices.

## Important data limitation
This is **not a complete new-token feed**. The public endpoint used is `https://api.dexscreener.com/token-boosts/latest/v1`; it contains recently boosted tokens, not every newly launched token. Market cap may be unavailable, so the app falls back to FDV where needed and labels it `FDV / mcap*`. Built-in OHLCV charts are fetched from GeckoTerminal's public API and may be unavailable for very new/illiquid pairs. Do not treat crown badges as predictions or financial advice. No sample or fabricated token data is displayed.

## Run locally
For a quick test, serve this folder over HTTP (service workers and installability need HTTPS or localhost). For example:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

## Put it online for free
1. Create a GitHub repository.
2. Upload `index.html`, `manifest.json`, `sw.js`, and `icon.svg` to the repository root.
3. In repository Settings → Pages, enable deployment from the `main` branch and `/ (root)`.
4. Open the resulting HTTPS GitHub Pages URL on your phone.

## Install on iPhone
1. Open the deployed HTTPS URL in Safari.
2. Tap Share → Add to Home Screen.
3. Open GemRadar from the Home Screen.
4. Enable notifications from the Alerts button or Settings.

### Notification limitations
This starter version can show browser notifications when the app is open and refreshing. It does not include a push-notification server, so it cannot send reliable alerts when the app is closed or suspended. Reliable iOS web push requires an installed PWA, permission, and a push backend/service.

## Free public data
No API key is required for the current DexScreener endpoints. Public APIs may rate-limit, change, or be temporarily unavailable. This app does not trade tokens and never asks for wallet keys or seed phrases.


## Dashboard UI update
The mobile dashboard now uses a compact dark feed layout inspired by the supplied reference: summary tiles, Newest/Heaters/Trending filters, token/Mcap/1m volume/Peak columns, crown-style rule matches, local peak tracking, browser notifications while open, and an in-app OHLCV chart. It uses public DexScreener and GeckoTerminal endpoints. The sparkline is a decorative deterministic guide, not real historical data; the app labels the feed limitations. “Since first seen” peak tracking is local to the browser and is not an official callout price. Sign-in and paid Premium are visual-only and do not collect credentials or charge money.


## Mobile layout and chart behavior (updated)

- The mobile feed uses five non-overlapping columns: Token, Mcap, 1m Vol, Peak, and a compact chart.
- The compact chart is drawn only from public GeckoTerminal OHLCV candle closes. If public candles are missing or rate-limited, the mini chart stays blank rather than inventing a trend.
- Tapping a token name or its mini chart opens the built-in candlestick chart in the site; it does not redirect to DexScreener. Timeframes are 1m, 1h, and 1d.
- Free/Premium hit-rate percentages remain `—%` because this project does not have a verified historical Gembot callout feed. Local peak tracking starts only after the browser first observes a token.
- Market data is fetched from public APIs; public APIs may rate-limit or have incomplete history, especially for new pools.
