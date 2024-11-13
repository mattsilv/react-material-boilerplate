import { Theme } from "@mui/material/styles";

export interface ColorMode {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

export interface CustomTheme extends Theme {
  // Add any custom theme properties here
}
