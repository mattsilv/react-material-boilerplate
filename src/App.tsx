import { useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";
import Layout from "./components/Layout";
import { ColorModeProvider, useColorMode } from "./contexts/ColorModeContext";
import { FeatureFlagProvider } from "./contexts/FeatureFlagContext";

function AppContent() {
  const { mode } = useColorMode();

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#007AFF",
          },
          background: {
            default: mode === "dark" ? "#000000" : "#FFFFFF",
            paper: mode === "dark" ? "#1C1C1E" : "#FFFFFF",
          },
        },
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
          ].join(","),
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ColorModeProvider>
      <FeatureFlagProvider>
        <AppContent />
      </FeatureFlagProvider>
    </ColorModeProvider>
  );
}
