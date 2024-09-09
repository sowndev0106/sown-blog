import React, { useState, useEffect } from "react";
import {
  Avatar,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Snackbar,
  SxProps,
  Theme,
  Alert,
} from "@mui/material";
import style from "./Intro.module.scss";
import ContactIcons from "../../components/theme/contact-icon/ContactIcons";

export default function Intro() {
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  useEffect(() => {
    // Load Google reCAPTCHA v3 script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=6LfxNDgqAAAAAF42eyDgiINdfRmdWDD0YD2LnDXZ`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubscribe = async () => {
    setIsLoading(true);
    try {
      // @ts-ignore
      const captchaToken = await grecaptcha.execute(
        "6LfxNDgqAAAAAF42eyDgiINdfRmdWDD0YD2LnDXZ",
        { action: "submit" }
      );
      //https://strapi.sowndev.com
      const response = await fetch(
        "https://cms.sowndev.com/api/subscribers/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            captchaToken,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setSnackbarMessage("Subscription successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setEmail(""); // Clear email input on success
    } catch (error) {
      setSnackbarMessage("Subscription failed. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid container columns={12} spacing={10} sx={styles.container}>
      <Grid item md={6} sx={styles.leftColumn}>
        <Grid sx={styles.content}>
          <Typography variant="h1" sx={styles.title}>
            Hello. My name is Son
          </Typography>

          <Typography sx={styles.description}>
            I am currently working as a Backend Developer. This is my personal
            website where I share knowledge, experiences, and the life of a
            developer like myself :v
          </Typography>
          <Link target="_blank" href="/resume" color="inherit">
            My resume
          </Link>
          <Box component="div" sx={styles.subscribeForm}>
            <TextField
              sx={styles.input}
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              sx={styles.subscribeButton}
              onClick={handleSubscribe}
              disabled={!email || isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </Box>
          <ContactIcons title="Follow me:" sx={styles.contactIcons} />
        </Grid>
      </Grid>
      <Grid item md={6} xs={12} sx={styles.rightColumn}>
        <Box component="div" className={style.ring}>
          <Box component="div" className={style.avatar}>
            <Avatar
              sx={styles.avatarImage}
              alt="Son"
              src="/assets/avatar.jpg"
            />
          </Box>
        </Box>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

type Styles = {
  [key: string]: SxProps<Theme>;
};

const styles: Styles = {
  container: {
    height: "90vh",
    px: { lg: 20, xl: 20, md: 10, sm: 10, xs: 5 },
    mb: 10,
  },
  leftColumn: {
    display: "flex",
    alignItems: "center",
    textAlign: {
      xs: "center",
      sm: "center",
      md: "center",
      lg: "left",
      xl: "left",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: { xl: "50px", lg: "45px", md: "40px", xs: "35px" },
    fontFamily: "-apple-system",
    fontWeight: 800,
  },
  description: {
    mt: 1,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "-apple-system",
  },
  subscribeForm: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    gap: 2,
    width: "100%",
    maxWidth: "600px",
    mt: 3,
  },
  input: {
    flex: 1,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "primary.main",
      },
      "&:hover fieldset": {
        borderColor: "primary.light",
      },
    },
  },
  subscribeButton: {
    height: "56px",
    px: 3,
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: 2,
  },
  contactIcons: {
    justifyContent: "left",
    mt: 2,
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatarImage: {
    height: "99%",
    width: "99%",
  },
};
