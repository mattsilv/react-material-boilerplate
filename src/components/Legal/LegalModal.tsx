import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactMarkdown from "react-markdown";
import { legalModalStyles } from "./LegalModalStyles";

interface LegalModalProps {
  open: boolean;
  onClose: () => void;
  content: string;
  title: string;
}

export default function LegalModal({
  open,
  onClose,
  content,
  title,
}: LegalModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={legalModalStyles.dialog}
    >
      <DialogTitle sx={legalModalStyles.title}>
        {title}
        <IconButton
          onClick={onClose}
          sx={legalModalStyles.closeButton}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={legalModalStyles.content}>
        <ReactMarkdown
          components={{
            ul: ({ children }) => (
              <ul
                style={{
                  paddingLeft: "20px",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: "4px" }}>{children}</li>
            ),
            h2: ({ children }) => (
              <h2 style={{ marginTop: "24px", marginBottom: "12px" }}>
                {children}
              </h2>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
