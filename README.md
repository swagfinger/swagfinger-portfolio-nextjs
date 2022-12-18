# Next.js + Tailwindcss + storybook

## tailwind + nextjs

https://tailwindcss.com/docs/guides/nextjs

## storybook installation

npx storybook@next init

## tailwind.config.js (update)

- storybook by default creates a 'stories' folder and this needs to be included in tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}", //add this
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## .storybook/preview.js (update)

- update the preview by importing 'styles/globals.css'

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

## run

```cmd
<!-- storybook -->
npm run storybook
```

```cmd
<!-- dev -->
npm run dev
```
