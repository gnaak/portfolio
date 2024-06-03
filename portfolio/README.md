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

### 메인 페이지 스켈레톤 UI (05.28)
> 프로젝트 카드 UI 고민중...

### DIVA (05.28)
> 메뉴바가 onMouseEnter/Leave까지는 되는데 거기에 조건문을 걸면 될 때가 있고 안될 때가 있어서 삭제
> 
> onClick으로 메뉴바

### 프로젝트 내용 정리 && 다크모드 (05.29)
> tailwind.config.ts에 darkMode를 클래스로 추가해주고,
> localstorage 테마 이용해서 다크모드, 라이트모드 설정
> 
> 다크모드 시 어둡게, 글씨 하얗게 << 이런거 설정

### 프로젝트 반응형 만들기 && 메뉴바 (05.30)
> useRef를 안쓰더라도, 메뉴바를 absolute로 만들면 전역에서 가져오던지, useState를 쓰는건데
>
> useclient 안쓰고 하려면 힘들거같은데...? 1024px부터는 메뉴바 구성을 다르게 해야할듯?

### Vercel 이용한 배포
1. github 연동 시키고, 레포지토리 가져오기
2. 배포 하는데, 레포지토리 안에 있는 portfolio 선택하기(package.json 있는 dir)
3. 다른거 따라하려고 next.config 막 건들이면 큰일날 듯...

### 반응형, 노션 링크 추가 (05.31)
> 메뉴바로 이동할 때 메뉴바 크기만큼 낮춰야 할듯 

### 메뉴바 absolute -> fixed & 포트폴리오 프로젝트 추가 (06.01) v1.0.1 

### 디바 && 빌리불리 음역대 측정 및 주사위 굴리기 추가 (06.02)

### 리팩토링(06.03~
> 메뉴바 컴포넌트로 만들어서 한번에 관리 -> 내용이 다르지만 컴포넌트 내에서 pathname으로 분기처리
> 
> 지금은 페이지가 적어서 괜찮은데 페이지가 많아지면 다른 방법을 생각해봐야할듯? 
