import { Typography, Stack, Box } from "@mui/material";
import Login from "./Login/Login";
import DataTable from "./DataTable/DataTable";
import MapComponent from "./Map/MapComponent";
import { useFeatureFlags } from "../lib/feature-flags/context";

export default function MainContent() {
  const features = useFeatureFlags();

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Stack
        spacing={{ xs: 2, sm: 4 }}
        sx={{
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.5px",
            fontSize: { xs: "2rem", sm: "3rem" },
            wordBreak: "break-word",
          }}
        >
          Hello World
        </Typography>

        <Login />
        <DataTable />

        {features.showMap && <MapComponent height={300} />}
      </Stack>
    </Box>
  );
}
