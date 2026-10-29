# my-server

A small Node.js web server built with Express 5. It serves a static HTML page and a few simple routes and JSON API endpoints. It's a first learning project.

## Getting started

```bash
npm install
node app.js
```

The server runs at http://localhost:3000.

## Routes

| Route | Description |
| --- | --- |
| `GET /` | Plain-text greeting |
| `GET /about` | Short text about the program |
| `GET /api/time` | JSON with the current `time` and `date` |
| `GET /api/greeting?name=...` | JSON echoing the `name` query parameter |

Static files in [public/](public/) (e.g. `index.html`) are served by Express.

## Tech stack

- Node.js
- Express 5
