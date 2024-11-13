import { Box } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocateControl from "./LocateControl";

interface MapComponentProps {
  height?: number;
}

export default function MapComponent({ height = 400 }: MapComponentProps) {
  return (
    <Box sx={{ position: "relative", height }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocateControl />
      </MapContainer>
    </Box>
  );
}
