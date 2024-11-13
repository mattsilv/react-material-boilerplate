import { SxProps, Theme } from "@mui/material/styles";

export const footerStyles = {
  footer: {
    py: 3,
    px: 2,
    mt: "auto",
    borderTop: (theme: Theme) => `1px solid ${theme.palette.divider}`,
  } as SxProps<Theme>,
};
