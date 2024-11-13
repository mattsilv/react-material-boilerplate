import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  Box,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { loginStyles } from "./LoginStyles.ts";
import LegalModal from "../Legal/LegalModal";

// Import markdown files
import termsContent from "../../data/legal/terms.md?raw";
import privacyContent from "../../data/legal/privacy.md?raw";

export default function Login() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
  };

  return (
    <>
      <Card>
        <CardContent>
          <Stack spacing={3} sx={loginStyles.container}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleSignIn}
              sx={loginStyles.googleButton}
            >
              Sign in with Google
            </Button>

            <Typography variant="caption" color="text.secondary" align="center">
              By continuing, you agree to our{" "}
              <Button
                sx={{ p: 0, minWidth: 0, textTransform: "none" }}
                onClick={() => setTermsOpen(true)}
              >
                Terms of Service
              </Button>{" "}
              and{" "}
              <Button
                sx={{ p: 0, minWidth: 0, textTransform: "none" }}
                onClick={() => setPrivacyOpen(true)}
              >
                Privacy Policy
              </Button>
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      <LegalModal
        open={termsOpen}
        onClose={() => setTermsOpen(false)}
        content={termsContent}
        title="Terms of Service"
      />

      <LegalModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        content={privacyContent}
        title="Privacy Policy"
      />
    </>
  );
}
