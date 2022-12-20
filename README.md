# Next.js + Tailwindcss + storybook + Reduxtoolkit

## 1. [tailwind + nextjs](https://tailwindcss.com/docs/guides/nextjs)

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

```css
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 2. storybook installation

- https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/

```cmd
npx storybook@next init
```

## .storybook/preview.js (update)

- update the preview by importing tailwind global styles 'styles/globals.css'

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
