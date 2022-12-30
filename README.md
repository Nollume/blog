# Blog

Tu je dokončené moje zadanie. Mal som spraviť 3 responzívne podstránky s jedinečnou url 'homepage' 'blog' a 'blog-detail' vo VUE3 setup, na
ostatné podstránky som vložil aspon niečo aby to nebolo prázdne. Neviem aký font bol použitý v zadaní teda som použil iný ale podobný.
Neviem ako mal vyzerať responzívny dizajn na menších obrazovkách takže som to spravil podla seba.
Mal som použiť volne prístupné obrázky z googlu, nechcel som ich dať priamo do projektu pretože by to spomalilo načítavanie stránky (a to som mal
tiež čo najelpšie optimalizovať) takže som sa rozhodol že ich tam dám cez unsplash API. Snažil som sa robiť čo najviac prepoužitelný kod + TS typy.
Normálne by som asi použil tailwind CSS pretože tak mi ide písanie css-ka najrýchlejšie, ale neviem či ho používate tak som použil SCSS.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
