import { Box, Container } from "@mui/material";
import Navbar from "./Navbar.tsx";
import MainContent from "./MainContent";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        <MainContent />
      </Container>
    </Box>
  );
}
