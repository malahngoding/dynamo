import { createStyled } from "@stitches/react";

const theme = {
  colors: {
    $light: "#ffffff",
    $dark: "#18191F",
    $dark800: "#474A57",
    $dark700: "#969BAB",
    $dark500: "#9FA4B4",
    $dark300: "#EEEFF4",
    $dark100: "#F4F5F7",
    $blue: "#1947E6",
    $blue800: "#8094FF",
    $blue100: "#E9E7FC",
    $pink: "#FF89BB",
    $pink800: "#FFC7DE",
    $pink100: "#FFF3F8",
    $yellow: "#FFBD12",
    $yellow800: "#FFD465",
    $yellow100: "#FFF4CC",
    $green: "#00C6AE",
    $green800: "#61E4C5",
    $green100: "#D6FCF7",
    $red: "#F95A2C",
    $red800: "#FF9692",
    $red100: "#FFE8E8",
  },
  space: {
    $0: "0.5em",
    $1: "1em",
    $2: "2em",
    $3: "3em",
    $4: "4em",
    $5: "5em",
  },
  sizes: {
    $0: "0.5em",
    $1: "1em",
    $2: "2em",
    $3: "3em",
    $4: "4em",
    $5: "5em",
  },
  fontSizes: {
    $0: "0.75rem",
    $1: "1rem",
    $2: "1.25rem",
    $3: "1.75rem",
    $4: "2.5rem",
    $5: "3rem",
  },
  fonts: {
    $mono:
      "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
  },
};

const breakpoints = {
  sm: (rule: any) => `@media (min-width: 640px) { ${rule} }`,
  md: (rule: any) => `@media (min-width: 768px) { ${rule} }`,
  lg: (rule: any) => `@media (min-width: 1024px) { ${rule} }`,
  xl: (rule: any) => `@media (min-width: 1280px) { ${rule} }`,
};

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {},
  breakpoints: breakpoints,
});

css.global({
  "::selection": {
    background: "#fff4cc",
  },
});
