# HBD Pokemon

<p align="center">
    <img src="https://github.com/solo-service/poketmon_hbd/assets/96280450/a62bdbd8-ed3f-4e54-af5e-583068c4b57c">
</p>

## HBD Pokemon 1.0

> **개발기간** 2024.04 ~ 2024.04

<br>

## 배포주소

> https://poketmon-hbd.vercel.app/

<br>

## 프로젝트 소개

많은 사람들이 좋아하는 포켓몬스터라는 게임이 있습니다. <br/>포켓몬스터는 과거부터 시작해서 지금까지 많은 인기를 가지고 있는데 포켓몬스터 안에는 도감이라는 시스템이 있으며 포켓몬스터마다 번호가 붙어있는데 지금은 총 1025개의 포켓몬스터가 존재합니다. <br/>생일을 입력하고 내 생일이 어떤 포켓몬에 해당되어 있는지 확인하는 간단한 재미있는 사이트입니다.

<br>

## 시작 가이드

### 요구사항

- Node.js 20.11.1^
- Npm 10.5.0^

```
$ npm install
$ npm start
```

<br>

## 기술 스택

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1716894856735?alt=media&token=1c1071cf-0aef-4bd8-a853-00f1654206a1)](https://github.com/msdio/stackticon)

<br>

## 화면 구성

|                                                  메인 페이지                                                   |                                                   작성 페이지                                                    |                                                   완료 페이지                                                    |
| :------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![메인화면](https://github.com/solo-service/poketmon_hbd/assets/96280450/d2c81149-f098-4c8a-bd0a-9f01cdceea7e) | ![작성페이지](https://github.com/solo-service/poketmon_hbd/assets/96280450/b54c1fac-f3a2-4823-8dbb-8978a4112387) | ![완료페이지](https://github.com/solo-service/poketmon_hbd/assets/96280450/11ff590f-45ac-40d5-8f27-4e5397bea769) |

<br>

## 주요 기능

### ⭐ PokeAPI을 통한 API 통신

- Redux-toolkit 과 Redux-thunk을 이용하여 PokeAPI와 통신하여 해당 포켓몬을 가져옵니다.

### ⭐ Swiper을 이용한 Step 형식 form

- Swiper을 이용한 Step 형식의 form을 구현하였습니다.

## 아키텍쳐

```
poketmon_hbd
├─ .gitignore
├─ .storybook
│  ├─ main.ts
│  └─ preview.ts
├─ craco.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  └─ icons
│  │     ├─ icon-114x114.png
│  │     ├─ icon-120x120.png
│  │     ├─ icon-144x144.png
│  │     ├─ icon-152x152.png
│  │     ├─ icon-192x192.png
│  │     ├─ icon-512x512.png
│  │     ├─ icon-57x57.png
│  │     ├─ icon-60x60.png
│  │     ├─ icon-72x72.png
│  │     └─ icon-76x76.png
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ asset
│  │  ├─ font
│  │  │  └─ PokemonGSK2
│  │  │     ├─ PokemonGSK2.eot
│  │  │     ├─ PokemonGSK2.ttf
│  │  │     ├─ PokemonGSK2.woff
│  │  │     ├─ PokemonGSK2.woff2
│  │  │     └─ stylesheet.css
│  │  └─ image
│  │     └─ pokeball
│  │        ├─ masterball.jpg
│  │        └─ pokeball.jpg
│  ├─ components
│  │  ├─ common
│  │  │  ├─ Btn
│  │  │  │  ├─ Btn
│  │  │  │  │  ├─ Btn.stories.ts
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ style.ts
│  │  │  │  └─ CircleBtn
│  │  │  │     ├─ CircleBtn.stories.ts
│  │  │  │     ├─ index.tsx
│  │  │  │     └─ style.ts
│  │  │  ├─ Footer
│  │  │  │  ├─ Footer.stories.ts
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ style.ts
│  │  │  ├─ Header
│  │  │  │  ├─ Header.stories.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ style.ts
│  │  │  ├─ Input
│  │  │  │  ├─ Input.stories.ts
│  │  │  │  └─ style.ts
│  │  │  ├─ Layout
│  │  │  │  ├─ Layout.style.ts
│  │  │  │  └─ Layout.tsx
│  │  │  └─ Select
│  │  │     ├─ index.tsx
│  │  │     ├─ Select.stories.tsx
│  │  │     └─ style.ts
│  │  └─ search
│  │     ├─ TodayPokemon.style.ts
│  │     └─ TodayPokemon.tsx
│  ├─ index.css
│  ├─ index.tsx
│  ├─ page
│  │  ├─ complete
│  │  │  ├─ Complete.tsx
│  │  │  └─ style.ts
│  │  ├─ main
│  │  │  ├─ Main.tsx
│  │  │  └─ style.ts
│  │  └─ search
│  │     ├─ Search.tsx
│  │     └─ style.ts
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ service-worker.ts
│  ├─ serviceWorkerRegistration.ts
│  ├─ setupTests.ts
│  ├─ store
│  │  ├─ @types
│  │  │  ├─ PokeType.ts
│  │  │  └─ SpeciesType.ts
│  │  ├─ feature
│  │  │  ├─ pokemon
│  │  │  │  └─ pokeSlice.ts
│  │  │  └─ today
│  │  │     └─ todaySlice.ts
│  │  └─ store.ts
│  ├─ stories
│  │  ├─ assets
│  │  │  ├─ accessibility.png
│  │  │  ├─ accessibility.svg
│  │  │  ├─ addon-library.png
│  │  │  ├─ assets.png
│  │  │  ├─ avif-test-image.avif
│  │  │  ├─ context.png
│  │  │  ├─ discord.svg
│  │  │  ├─ docs.png
│  │  │  ├─ figma-plugin.png
│  │  │  ├─ github.svg
│  │  │  ├─ share.png
│  │  │  ├─ styling.png
│  │  │  ├─ testing.png
│  │  │  ├─ theming.png
│  │  │  ├─ tutorials.svg
│  │  │  └─ youtube.svg
│  │  ├─ button.css
│  │  ├─ Button.stories.ts
│  │  ├─ Button.tsx
│  │  ├─ Configure.mdx
│  │  ├─ header.css
│  │  ├─ Header.stories.ts
│  │  ├─ Header.tsx
│  │  ├─ page.css
│  │  ├─ Page.stories.ts
│  │  └─ Page.tsx
│  ├─ types
│  │  └─ styled.d.ts
│  └─ utils
│     ├─ GlobalStyles.ts
│     └─ Theme.ts
├─ tsconfig.json
└─ tsconfig.paths.json

```

## 웹개발팀

<table>
  <tr>
    <th style="width: 200px; text-align : center;">김지유</th>
  </tr>
  <tr style="border-bottom: 1px solid white;">
    <td>
        <img src="https://github.com/gugumo-service/gugumo_frontend/assets/96280450/d6716133-cc01-451c-af07-0da997725785">
    </td>
  </tr>
  <tr style="border-bottom: 1px solid white; text-align : center;">
    <td>FE</td>
  </tr>
</table>
