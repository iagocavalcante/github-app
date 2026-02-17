# GitHub App

> A Quasar v2 (Vue 3) app to browse your GitHub repositories

## Features

- List all GitHub repositories for a user
- View repository details with descriptions
- Built with Quasar v2 + Vite
- Responsive design

## Tech Stack

- **Framework:** Quasar v2.18.6 (Vue 3.4)
- **Build Tool:** Vite 5.4.21
- **HTTP Client:** Native fetch API

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:9000
npm run dev

# build for production
npm run build
```

## Project Structure

```
src/
├── components/     # Vue components
│   ├── Hello.vue   # Home page
│   ├── Repos.vue   # Repositories list
│   └── Error404.vue
├── css/           # Global styles (SASS)
├── App.vue        # Root component
└── main.js        # Entry point
```

## Upgraded

- Migrated from Quasar v0.17 (Vue 2) to Quasar v2 (Vue 3)
- Migrated from Webpack to Vite
