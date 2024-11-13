import { Box, Container } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import MainContent from "./MainContent";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Container
        component="main"
        disableGutters
        sx={{
          mt: { xs: 2, sm: 4 },
          mb: { xs: 2, sm: 4 },
          px: { xs: 2, sm: 3 },
          maxWidth: {
            xs: "100%",
            sm: "600px",
            md: "900px",
          },
          overflow: "hidden",
        }}
      >
        <MainContent />
      </Container>
    </Box>
  );
}
