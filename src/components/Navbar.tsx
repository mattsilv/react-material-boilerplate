import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useColorMode } from "../contexts/ColorModeContext";

export default function Navbar() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <AppBar position="sticky" elevation={0} color="default">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            letterSpacing: "-0.5px",
          }}
        >
          Logo
        </Typography>
        <IconButton onClick={toggleColorMode}>
          {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
