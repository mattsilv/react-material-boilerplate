import { Box, Typography } from "@mui/material";
import { footerStyles } from "./FooterStyles.ts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={footerStyles.footer}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {currentYear} AppLogo. All rights reserved.
      </Typography>
    </Box>
  );
}
