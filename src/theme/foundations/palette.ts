import { PaletteColorOptions, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  export interface PaletteOptions {
    blue?: PaletteColorOptions;
    yellow?: PaletteColorOptions;
  }
}

export const palette: PaletteOptions = {
  common: {
    white: "#fff",
    black: "#000",
  },
  primary: {
    main: "#33A3FF",
    light: "#53B1FD66",
  },
  blue: {
    100: "#D1E9FF",
  },
  yellow: {
    500: "#F79009",
    600: "#DC6803",
  },
};
