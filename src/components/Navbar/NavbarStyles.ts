import { SxProps, Theme } from "@mui/material/styles";

export const navbarStyles = {
  appBar: {
    borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
  } as SxProps<Theme>,

  title: {
    flexGrow: 1,
    fontWeight: 600,
    letterSpacing: "-0.5px",
  } as SxProps<Theme>,

  drawer: {
    width: 250,
    pt: 2,
  } as SxProps<Theme>,

  menuItem: {
    py: 1,
    px: 3,
    "&:hover": {
      backgroundColor: "action.hover",
    },
  } as SxProps<Theme>,

  divider: {
    my: 1,
  } as SxProps<Theme>,
};
