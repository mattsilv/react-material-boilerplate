import { SxProps, Theme } from "@mui/material/styles";

interface MapStyles {
  container: SxProps<Theme>;
}

export const mapStyles: MapStyles = {
  container: {
    "& .leaflet-container": {
      borderRadius: 1,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    "& .leaflet-control-zoom": {
      border: "none",
      "& a": {
        color: "text.primary",
        backgroundColor: "background.paper",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      },
    },
  },
};
