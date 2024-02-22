import {
    Avatar,
    Grid,
    Box,
    Typography,
    TextField,
    Button,
    Link,
} from "@mui/material";
import style from "./Intro.module.scss";
import {
    faFacebook,
    faTiktok,
    faYoutube,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ContactIcons from "../../components/theme/contact-icon/ContactIcons";

export default function Intro() {
    return (
        <Grid container columns={12} spacing={10} sx={{
            height: "90vh", px: {
                lg: 20,
                xl: 20,
                md: 10,
                sm: 10,
                xs: 5
            }, mb: 10
        }}>
            <Grid
                item
                md={6}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: {
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "left",
                        xl: "left"
                    },
                }}
            >
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        sx={{
                            fontSize: {
                                xl: "50px",
                                lg: "45px",
                                md: "40px",
                                xs: "35px",
                            },
                            fontFamily: "-apple-system",
                            body: {
                                fontWeight: 1800,
                            },

                        }}
                    >
                        Hello. My name is Son
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: 18,
                            fontWeight: 400,
                            fontFamily: "-apple-system",
                        }}
                    >
                        I am currently working as a Backend Developer. This is my personal website where I share knowledge, experiences, and the life of a developer like myself :v
                    </Typography>
                    <Link target="_blank" href="/resume" color="inherit" >
                        My resume
                    </Link>
                    <Box component="div" sx={{
                        pt: 3, display: "flex", width: {
                            md: "100%"
                        }
                    }}>
                        <TextField sx={{ mr: 3, flex: 1 }} label="Email" />
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "white",
                                background: "#0057FF",
                                pl: 3,
                                pr: 3,
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                    {/* list icon follow me */}
                    <ContactIcons title=" Follow me:" sx={{ justifyContent: "left" }} />
                </Grid>
            </Grid>
            <Grid
                item
                md={6}
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <Box component="div" className={style.ring}>
                    <Box component="div" className={style.avatar}>
                        <Avatar
                            sx={{ height: "99%", width: "99%" }}
                            alt="Son"
                            src="\assets\avatar.jpg"
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
