import { useEffect, useState, useRef } from "react";
import { useMap } from "react-leaflet";
import { IconButton, Paper } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import L from "leaflet";

export default function LocateControl() {
  const map = useMap();
  const [loading, setLoading] = useState(false);
  const markers = useRef<{ marker: L.Marker | null; circle: L.Circle | null }>({
    marker: null,
    circle: null,
  });

  const clearMarkers = () => {
    Object.values(markers.current).forEach((marker) => marker?.remove());
    markers.current = { marker: null, circle: null };
  };

  useEffect(() => {
    const handleSuccess = (e: L.LocationEvent) => {
      setLoading(false);
      clearMarkers();
      markers.current = {
        marker: L.marker(e.latlng).addTo(map),
        circle: L.circle(e.latlng, e.accuracy).addTo(map),
      };
    };

    const handleError = () => {
      setLoading(false);
      clearMarkers();
    };

    map.on("locationfound", handleSuccess);
    map.on("locationerror", handleError);
    return () => {
      map.off("locationfound", handleSuccess);
      map.off("locationerror", handleError);
      clearMarkers();
    };
  }, [map]);

  return (
    <Paper
      elevation={2}
      sx={{ position: "absolute", right: 10, top: 10, zIndex: 1000 }}
    >
      <IconButton
        onClick={() => {
          setLoading(true);
          map.locate({ setView: true, maxZoom: 16 });
        }}
        disabled={loading}
        size="small"
        sx={{ p: 1, "&:hover": { backgroundColor: "action.hover" } }}
      >
        <MyLocationIcon
          sx={{
            animation: loading ? "spin 1s linear infinite" : "none",
            "@keyframes spin": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        />
      </IconButton>
    </Paper>
  );
}
