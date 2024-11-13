import {
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  TextField,
  Alert,
  Container,
  Box,
} from "@mui/material";
import MapComponent from "./Map/MapComponent";
import DataTable from "./DataTable/DataTable";
import { useFeatureFlags } from "../contexts/FeatureFlagContext";

export default function MainContent() {
  const features = useFeatureFlags();

  return (
    <Container maxWidth="sm">
      <Stack spacing={4}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          Hello World
        </Typography>

        <Card>
          <CardContent>
            <Stack spacing={3}>
              <TextField label="Email" variant="outlined" fullWidth />
              <Box sx={{ width: "100%", maxWidth: "320px", mx: "auto" }}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    py: 1.5,
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <DataTable />

        {features.showMap && (
          <Card>
            <CardContent>
              <MapComponent height={300} />
            </CardContent>
          </Card>
        )}

        <Alert severity="success">Welcome to your new React application!</Alert>
      </Stack>
    </Container>
  );
}
