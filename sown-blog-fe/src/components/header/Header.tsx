import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import JavascriptIcon from "@mui/icons-material/Javascript";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as LogoDark } from "..//..//logo-dark-v1.svg";
import { ReactComponent as LogoLight } from "..//..//logo-light-v1.svg";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { changeTheme } from "../theme/themeSlice";
import { useAppDispatch } from "../../redux/hooks";

const pages = ["Home", "Blog", "Project", "About me"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [isthemeDark, setIsthemeDark] = React.useState(false);
  const dispatch = useAppDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleChangeTheme = () => {
    setIsthemeDark(!isthemeDark);
    dispatch(changeTheme());
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              fontWeight: 800,
            }}
          >
            {isthemeDark ? (
              <LogoDark height="100px" width="200px" />
            ) : (
              <LogoLight height="100px" width="200px" />
            )}
          </Box>

          {/* Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 2,
                  fontFamily: "Work Sans",
                  textTransform: "none",
                  color: "inherit",
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                {page}
              </Button>
            ))}
            <Box
              sx={{ my: 2, ml: 2, color: "inherit" }}
              display="flex"
              alignItems="center"
            >
              <Button
                startIcon={<SearchIcon />}
                sx={{
                  textTransform: "none",
                  width: "150px",
                  fontStyle: "italic",
                  fontWeight: "300",
                  justifyContent: "flex-start",
                  borderRadius: 3,
                }}
                size="small"
                variant="outlined"
                color="inherit"
              >
                Search...
              </Button>
            </Box>
            <IconButton
              color="primary"
              sx={{
                my: 2,
                mx: 2,
                color: "inherit",
              }}
              onClick={handleChangeTheme}
            >
              {isthemeDark ? <WbSunnyIcon /> : <NightlightIcon />}
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Box display="flex" justifyContent="center">
                <IconButton
                  sx={{ color: "inherit" }}
                  onClick={handleChangeTheme}
                >
                  {isthemeDark ? <WbSunnyIcon /> : <NightlightIcon />}
                </IconButton>
                <IconButton sx={{ color: "inherit" }}>
                  <SearchIcon></SearchIcon>
                </IconButton>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
