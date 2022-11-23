import { components } from "theme/components";
import { foundations } from "./foundations";
import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  ...foundations,
};

export const theme = createTheme({
  ...themeOptions,
  components: {
    ...components,
  },
});
