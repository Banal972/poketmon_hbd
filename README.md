# HBD Pokemon

<p align="center">
    <img src="https://github.com/solo-service/poketmon_hbd/assets/96280450/ce7ad342-23d1-463d-8f5d-e5652322ec4d">
</p>

## HBD Pokemon 1.0

> **개발기간** 2024.04 ~ 2024.04

## 배포주소

> https://poketmon-hbd.vercel.app/

## 개발팀

|                                                        프론트엔드                                                        |
| :----------------------------------------------------------------------------------------------------------------------: |
| <img width=100 src="https://github.com/solo-service/mvz-frontend/assets/96280450/2f15aa41-a15c-4694-9c72-1e578973902b"/> |
|                                               https://banal7.tistory.com/                                                |

## 프로젝트 소개

많은 사람들이 좋아하는 포켓몬스터라는 게임이 있습니다. <br/>포켓몬스터는 과거부터 시작해서 지금까지 많은 인기를 가지고 있는데 포켓몬스터 안에는 도감이라는 시스템이 있으며 포켓몬스터마다 번호가 붙어있는데 지금은 총 1025개의 포켓몬스터가 존재합니다. <br/>생일을 입력하고 내 생일이 어떤 포켓몬에 해당되어 있는지 확인하는 간단한 재미있는 사이트입니다.

## 시작 가이드

### 요구사항

- Node.js 20.11.1^
- Npm 10.5.0^

```
$ npm install
$ npm start
```

## 기술 스택

### Environment

<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

### Communication

<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white">

### Design

<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

## 화면 구성

| 메인페이지                                                                                                     | 작성페이지                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/solo-service/poketmon_hbd/assets/96280450/af1acb97-6ef4-4d1b-ad0d-6e2b717c8169"/> | <img src="https://github.com/solo-service/poketmon_hbd/assets/96280450/eb4ac21a-b1d5-4559-8065-34a714a5dfa3"/> |
| 결과페이지                                                                                                     |
| <img src="https://github.com/solo-service/poketmon_hbd/assets/96280450/d524963f-ab01-46fe-a550-4e68e3b68cbb"/> |

## 주요 기능

### ⭐ PokeAPI을 통한 API 통신

- Redux-toolkit 과 Redux-thunk을 이용하여 PokeAPI와 통신하여 해당 포켓몬을 가져옵니다.

### ⭐ Swiper을 이용한 Step 형식 form

## 아키텍쳐

```
poketmon_hbd
├─ .gitignore
├─ .storybook
│ ├─ main.ts
│ └─ preview.ts
├─ package-lock.json
├─ package.json
├─ public
│ ├─ favicon.ico
│ ├─ index.html
│ ├─ logo180.png
│ ├─ logo310.png
│ ├─ manifest.json
│ └─ robots.txt
├─ README.md
├─ src
│ ├─ App.test.tsx
│ ├─ App.tsx
│ ├─ asset
│ │ ├─ font
│ │ │ └─ PokemonGSK2
│ │ │ ├─ PokemonGSK2.woff
│ │ │ ├─ PokemonGSK2.woff2
│ │ │ └─ stylesheet.css
│ │ └─ image
│ │ └─ pokeball
│ │ ├─ masterball.jpg
│ │ └─ pokeball.jpg
│ ├─ components
│ │ ├─ common
│ │ │ ├─ Btn
│ │ │ │ ├─ Btn
│ │ │ │ │ ├─ Btn.stories.ts
│ │ │ │ │ ├─ index.tsx
│ │ │ │ │ └─ style.ts
│ │ │ │ └─ CircleBtn
│ │ │ │ ├─ CircleBtn.stories.ts
│ │ │ │ ├─ index.tsx
│ │ │ │ └─ style.ts
│ │ │ ├─ Footer
│ │ │ │ ├─ Footer.stories.ts
│ │ │ │ ├─ index.tsx
│ │ │ │ └─ style.ts
│ │ │ ├─ Header
│ │ │ │ ├─ Header.stories.tsx
│ │ │ │ ├─ index.tsx
│ │ │ │ └─ style.ts
│ │ │ ├─ Input
│ │ │ │ ├─ Input.stories.ts
│ │ │ │ └─ style.ts
│ │ │ ├─ Layout
│ │ │ │ ├─ Layout.style.ts
│ │ │ │ └─ Layout.tsx
│ │ │ └─ Select
│ │ │ ├─ index.tsx
│ │ │ ├─ Select.stories.tsx
│ │ │ └─ style.ts
│ │ └─ search
│ │ └─ TodayPokemon.tsx
│ ├─ index.css
│ ├─ index.tsx
│ ├─ page
│ │ ├─ complete
│ │ │ ├─ Complete.tsx
│ │ │ └─ style.ts
│ │ ├─ main
│ │ │ ├─ Main.tsx
│ │ │ └─ style.ts
│ │ └─ search
│ │ ├─ Search.tsx
│ │ └─ style.ts
│ ├─ react-app-env.d.ts
│ ├─ reportWebVitals.ts
│ ├─ service-worker.ts
│ ├─ serviceWorkerRegistration.ts
│ ├─ setupTests.ts
│ ├─ store
│ │ ├─ @types
│ │ │ ├─ PokeType.ts
│ │ │ └─ SpeciesType.ts
│ │ ├─ feature
│ │ │ ├─ pokemon
│ │ │ │ └─ pokeSlice.ts
│ │ │ └─ today
│ │ │ └─ todaySlice.ts
│ │ └─ store.ts
│ ├─ stories
│ │ ├─ assets
│ │ │ ├─ accessibility.png
│ │ │ ├─ accessibility.svg
│ │ │ ├─ addon-library.png
│ │ │ ├─ assets.png
│ │ │ ├─ avif-test-image.avif
│ │ │ ├─ context.png
│ │ │ ├─ discord.svg
│ │ │ ├─ docs.png
│ │ │ ├─ figma-plugin.png
│ │ │ ├─ github.svg
│ │ │ ├─ share.png
│ │ │ ├─ styling.png
│ │ │ ├─ testing.png
│ │ │ ├─ theming.png
│ │ │ ├─ tutorials.svg
│ │ │ └─ youtube.svg
│ │ ├─ button.css
│ │ ├─ Button.stories.ts
│ │ ├─ Button.tsx
│ │ ├─ Configure.mdx
│ │ ├─ header.css
│ │ ├─ Header.stories.ts
│ │ ├─ Header.tsx
│ │ ├─ page.css
│ │ ├─ Page.stories.ts
│ │ └─ Page.tsx
│ └─ utils
│ └─ GlobalStyles.ts
└─ tsconfig.json
```
