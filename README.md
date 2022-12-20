# Next.js + Tailwindcss + storybook + Reduxtoolkit + styledcomponents

## 1. [tailwind + nextjs](https://tailwindcss.com/docs/guides/nextjs)

- at the end of setup of step 1, you should see base styles applied to index.tsx

```
npx create-next-app@latest my-project --typescript --eslint
```

- cd my-project
- Tailwind CSS v3.2

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

## tailwind.config.js (update)

- storybook by default creates a 'stories' folder and this needs to be included in tailwind.config.js
- however later when we build our pages in 'pages/' folder, we can remove this stories folder

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}", //add this (after storybook installed)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```tsx
<!-- pages/index.tsx -->
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

---

## 2. storybook installation

- https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/

```cmd
npx storybook@next init

<!-- already have storybook installed? -->
npx storybook@next upgrade --prerelease
```

- update the preview by importing tailwind global styles 'styles/globals.css'
- you can test if tailwind gets picked up in storybook by editing a classname to include tailwind

```tsx
// stories/button.tsx
className={['bg-red-500 btn'].join(' ')}
```

## .storybook/preview.js (update)

```js
import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
```

---

## styled components

npm i styled-components
npm i styled-components-modifiers

---

## reduxtoolkit

- https://redux-toolkit.js.org/tutorials/quick-start
  npm install @reduxjs/toolkit react-redux

## run project

```
npm run dev
npm run storybook
```
