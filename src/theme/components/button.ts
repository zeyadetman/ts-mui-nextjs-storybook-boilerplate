import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";
import { IOwnerState } from "interfaces/mui";

declare module "@mui/material/Button" {
  export interface ButtonPropsVariantOverrides {
    customVariant: true;
  }
}

type muiButtonBase = {
  defaultProps?: ComponentsProps["MuiButtonBase"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButtonBase"];
  variants?: ComponentsVariants["MuiButtonBase"];
};

type muiButton = {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
  variants?: ComponentsVariants["MuiButton"];
};

export const MuiButtonBase: muiButtonBase = {
  defaultProps: {
    color: "#fff",
  },
  styleOverrides: {
    root: {
      width: "100%",
    },
  },
};

export const MuiButton: muiButton = {
  variants: [
    {
      props: { variant: "contained" },
      style: ({
        theme,
        ownerState,
      }: {
        theme: Theme;
        ownerState: IOwnerState;
      }) => {
        const currentColor = theme.palette[ownerState.color];

        return {
          textTransform: "none",
          color: theme.palette.common.white,
          padding: "0.7rem",
          backgroundColor: currentColor.main,
          ":disabled": {
            backgroundColor: currentColor.light,
            color: theme.palette.common.white,
          },
        };
      },
    },
  ],
};
