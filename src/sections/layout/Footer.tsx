import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as LogoDark } from "..//..//logo-dark-v1.svg";
import { ReactComponent as LogoLight } from "..//..//logo-light-v1.svg";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { changeTheme } from "../../components/theme/themeSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Link as RouterLink } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import Link from "@mui/material/Link";
import ContactIcons from "../../components/theme/contact-icon/ContactIcons";
import { styled } from "@mui/styles";
const Root = styled('div')({
  "& a:hover": {
    textDecoration: "underline",
  }
});
const Footer = () => {
  return (
    <Root>
      <Divider variant="fullWidth" sx={{ mt: 4 }} />
      <Container maxWidth="sm" component="footer" sx={{
        mt: "auto", py: 3,
        px: 2,
      }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Typography variant="overline" align="center" color="text.primary" >
            <Link component={RouterLink} to="/" color="inherit" underline="none">
              Home
            </Link>
          </Typography>
          <Typography variant="overline" align="center" color="text.primary">
            <Link component={RouterLink} to="/posts" color="inherit" underline="none">
              Blog
            </Link>
          </Typography>

          <Typography variant="overline" align="center" color="text.primary">
            <Link component={RouterLink} to="/resume" color="inherit" underline="none">
              Resume
            </Link>
          </Typography>

          <Typography variant="overline" align="center" color="text.primary">
            <Link component={RouterLink} to="/projects" color="inherit" underline="none">
              Projects
            </Link>
          </Typography>
        </Box>
        <ContactIcons sx={{ mt: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          {"Copyright © "}
          <Link color="inherit" href="https://sowndev.com/">
            sowndev.com
          </Link>{" "}
          {new Date().getFullYear()}
          {"."} | Made by Sowndev
        </Typography>
      </Container>
    </Root>
  )
};
export default Footer;
