import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Dashboard,
  Map,
  TableChart,
  Settings,
} from "@mui/icons-material";
import { useColorMode } from "../../lib/color-mode/context";
import { navbarStyles } from "./NavbarStyles";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/" },
  { text: "Map View", icon: <Map />, path: "/map" },
  { text: "Data Table", icon: <TableChart />, path: "/table" },
  { text: "Settings", icon: <Settings />, path: "/settings" },
];

export default function Navbar() {
  const { mode, toggleColorMode } = useColorMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="default"
        sx={navbarStyles.appBar}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={navbarStyles.title}>
            AppLogo
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={navbarStyles.drawer}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={toggleDrawer(false)}
              sx={navbarStyles.menuItem}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <Divider sx={navbarStyles.divider} />
          <ListItem
            button
            onClick={() => {
              toggleColorMode();
              toggleDrawer(false)();
            }}
            sx={navbarStyles.menuItem}
          >
            <ListItemIcon>
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </ListItemIcon>
            <ListItemText
              primary={`${mode === "dark" ? "Light" : "Dark"} Mode`}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
