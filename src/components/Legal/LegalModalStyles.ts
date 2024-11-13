import { SxProps, Theme } from "@mui/material/styles";

export const legalModalStyles = {
  dialog: {
    "& .MuiDialog-paper": {
      margin: 2,
    },
  } as SxProps<Theme>,

  title: {
    pr: 6,
  } as SxProps<Theme>,

  content: {
    py: 2,
    px: 3,
    "& p": {
      mb: 2,
    },
  } as SxProps<Theme>,

  closeButton: {
    position: "absolute",
    right: 8,
    top: 8,
  } as SxProps<Theme>,
};
