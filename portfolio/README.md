## Next.js를 사용한 포트폴리오 제작(24.05.27~

### 프로젝트 생성 (05.27)
✔ npx creat-next-app

✔ npx creat-next-app

✔ .eslintc.json
> ```
> {
> "extends": ["next/babel", "next/core-web-vitals"]
> }
> ```

✔ next.config.mjs
>```
>/** @type {import('next').NextConfig} */
>const nextConfig = {
>  reactStrictMode:false
>};
>
>export default nextConfig;
>```

✔ postcss.config.mjs
>```
>/** @type {import('postcss-load-config').Config} */
>const config = {
>  plugins: {
>    tailwindcss: {},
>    autoprefixer: {},
>  },
>};
>
>export default config;
>```

✔ layout.tsx
>```
><head>
>  <link
>    rel="stylesheet"
>    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
>  />
></head>
>```

✔ resposive wev
>```
>screens: {
>  xs: "375px",
>  sm: "640px",
>  md: "768px",
>  lg: "1024px",
>  xl: "1280px",
>  "2xl": "1440px",
>  "3xl": "2560px",
>},
>```

⚙ 폴더 구조
```
.
├── public
│   ├── fonts
│   ├── images
│   └── svgs
├── src
│   ├── app
│   ├── components
│   ├── containers
│   ├── hooks
│   ├── services
│   ├── store
│   ├── styles
│   ├── types
│   └── utils
└── README.md
```
