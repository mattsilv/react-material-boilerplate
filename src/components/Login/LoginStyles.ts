import { SxProps, Theme } from "@mui/material/styles";

export const loginStyles = {
  container: {
    width: "100%",
    maxWidth: { xs: "100%", sm: "320px" },
    mx: "auto",
    textAlign: "center",
  } as SxProps<Theme>,

  googleButton: {
    py: 1.5,
    width: "100%",
    textTransform: "none",
    borderColor: "divider",
    "&:hover": {
      borderColor: "primary.main",
      backgroundColor: "action.hover",
    },
  } as SxProps<Theme>,
};
