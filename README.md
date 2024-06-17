<div align="center">
    <a href="https://devmodel.fun"><h1 align="center">portfolio.com</h1></a>

My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Upstash](https://upstash.com?ref=chronark.com), [Contentlayer](https://www.contentlayer.dev/) and deployed to [Vercel](https://vercel.com/).

</div>

<br/>


## Running Locally


```sh-session
git clone https://github.com/devollox/portfolio-web.com.git
cd portfolio-web
```


Create a `.env` file similar to `.env.example`.

```env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

Then install dependencies and run the development server:
```sh-session
pnpm install
pnpm dev
```


## Repo Mapper

```ts
├── app
|   ├── components
|   |   |   ├── analytics.tsx
|   |   |   ├── card.tsx
|   |   |   ├── error.tsx
|   |   |   ├── mdx.tsx
|   |   |   ├── nav.tsx
|   |   |   ├── particles.tsx
|   ├── contact
|   |   |   ├── page.tsx
|   ├── projects
|   |   ├── [slug]
|   |   |   |   ├── header.tsx
|   |   |   |   ├── mdx.css
|   |   |   |   ├── page.tsx
|   |   |   |   ├── view.tsx
|   |   |   ├── article.tsx
|   |   |   ├── layout.tsx
|   |   |   ├── page.tsx
|   |   ├── layout.tsx
|   |   ├── not-found.tsx
|   |   ├── page.tsx
├── content
|   ├── projects
|   |   |   ├── webmodern.mdx
|   |   |   ├── webportfolio.mdx
├── pages
|   ├── api
|   |   |   ├── incr.ts
├── public
|   ├── fonts
|   |   |   ├── CalSans-SemiBold.ttf
|   |   ├── devollox.png
|   |   ├── favicon.png
|   |   ├── og.png
├── types
|   |   ├── mdx.d.ts
├── util
|   |   ├── mouse.ts
|   ├── contentlayer.config.js
|   ├── global.css
|   ├── mdx-components.tsx
|   ├── next-env.d.ts
|   ├── next.config.mjs
|   ├── package-lock.json
|   ├── package.json
|   ├── pnpm-lock.yaml
|   ├── postcss.config.js
|   ├── README.md
|   ├── rome.json
|   ├── tailwind.config.js
|   ├── tsconfig.json
```
