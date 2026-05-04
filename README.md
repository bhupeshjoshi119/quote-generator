# 📖 Quote Generator

A clean, minimal quote generator built with **React + Vite**, powered by the [FreeAPI Quotes API](https://api.freeapi.app/api/v1/public/quotes). Browse 300 quotes across 30 pages with smooth transitions, tag badges, and full metadata.

---

## ✨ Features

- 🔄 Fetches live quotes from FreeAPI
- ⚡ Built with Vite + React 18
- 📦 Dependency management via **Bun**
- 🎲 Random quote picker
- ⬅️ ➡️ Prev / Next navigation with automatic page loading
- 🏷️ Tag badges per quote
- 📅 Displays `dateAdded` and `dateModified` from the API
- 🔢 Character count and quote ID metadata
- 💫 Smooth fade animation between quotes
- 🎨 Purple/violet design with Playfair Display + Inter fonts
- 📱 Fully responsive

---

## 🗂️ Project Structure

```
quote-generator/
├── index.html
├── vite.config.js
├── package.json
├── bun.lock
└── src/
    ├── main.jsx                        # App entry point
    ├── App.jsx                         # Root component — useState & useEffect
    ├── services/
    │   └── quoteService.js             # API fetch logic
    ├── styles/
    │   ├── global.css                  # CSS variables & reset
    │   └── app.css                     # Page layout & background
    └── components/
        ├── Header/
        │   ├── Header.jsx              # App title + live current date
        │   └── Header.css
        ├── QuoteCard/
        │   ├── QuoteCard.jsx           # Quote content with fade animation
        │   └── QuoteCard.css
        ├── QuoteMeta/
        │   ├── QuoteMeta.jsx           # dateAdded, dateModified, length, ID
        │   └── QuoteMeta.css
        ├── TagBadge/
        │   ├── TagBadge.jsx            # Individual tag pill
        │   └── TagBadge.css
        ├── QuoteControls/
        │   ├── QuoteControls.jsx       # Prev / Next / Random buttons + page info
        │   └── QuoteControls.css
        ├── Loader/
        │   ├── Loader.jsx              # Spinner shown while fetching
        │   └── Loader.css
        └── ErrorMessage/
            ├── ErrorMessage.jsx        # Error display with retry button
            └── ErrorMessage.css
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.0+
- Node.js v18+ (optional, if not using Bun)

### Install dependencies

```bash
bun install
```

### Start development server

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
bun run build
```

### Preview production build

```bash
bun run preview
```

---

## 🔌 API

Quotes are fetched from the [FreeAPI](https://freeapi.app) public quotes endpoint:

```
GET https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10
```

**Response shape used:**

| Field           | Type     | Description                        |
|-----------------|----------|------------------------------------|
| `id`            | number   | Unique quote ID                    |
| `content`       | string   | The quote text                     |
| `author`        | string   | Author name                        |
| `tags`          | string[] | Category tags (can be empty)       |
| `length`        | number   | Character count of the quote       |
| `dateAdded`     | string   | ISO date the quote was added       |
| `dateModified`  | string   | ISO date the quote was last edited |

Total: **300 quotes** across **30 pages**.

---

## 🧩 Component Props

| Component        | Props                                                                 |
|------------------|-----------------------------------------------------------------------|
| `QuoteCard`      | `quote` (object), `fadeIn` (boolean)                                  |
| `QuoteMeta`      | `dateAdded`, `dateModified`, `length`, `id`                           |
| `TagBadge`       | `tag` (string)                                                        |
| `QuoteControls`  | `onNext`, `onPrev`, `onRandom`, `isFirst`, `isLast`, `currentIndex`, `total`, `page`, `totalPages` |
| `ErrorMessage`   | `message` (string), `onRetry` (function)                              |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI library |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [Bun](https://bun.sh) | Package manager & runtime |
| [FreeAPI](https://freeapi.app) | Quotes data source |
| Google Fonts | Playfair Display + Inter |

---

## 📸 UI Overview

```
┌─────────────────────────────────────┐
│           ❝  Daily Quotes           │
│       Tuesday, May 5, 2026          │
├─────────────────────────────────────┤
│  "                                  │
│   Opportunity is missed by most     │
│   people because it is dressed in   │
│   overalls and looks like work.     │
│                                     │
│  ——  Thomas Edison                  │
│                                     │
│  [Opportunity]  [Work]              │
│                                     │
│  Added: Apr 14, 2023                │
│  Modified: Apr 14, 2023             │
│  Length: 91 chars  •  ID: #3        │
├─────────────────────────────────────┤
│   ← Prev    ✦ Random    Next →      │
│      Quote 3 of 10 · Page 1/30      │
└─────────────────────────────────────┘
```

---

## 📄 License

MIT
