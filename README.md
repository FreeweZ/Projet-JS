# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Missions Batman

La page `/missions` utilise le plugin `app/plugins/api.js` pour centraliser les appels vers
[DummyJSON](https://dummyjson.com/docs/todos). La liste est chargée avec `GET /todos/user/1`
et une mission peut être envoyée avec `POST /todos/add`.

DummyJSON est une API de démonstration : les tâches reçues ne sont pas spécifiques à Batman et
les créations sont simulées, sans persistance sur le serveur.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
