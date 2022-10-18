import {
  Avatar,
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  makeStyles,
} from "@mui/material";
import style from "./Intro.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


export default function Intro() {
  console.log(process.env.PUBLIC_URL + "/avatar.jpg")
  return (
    <Container>
      <Grid container columns={12} spacing={10} sx={{ pt: 10, pb: 10 }}>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            textAlign: "left",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid>
            <Typography
              sx={{
                fontSize: 50,
                fontFamily: "-apple-system",
                body: {
                  fontWeight: 800,
                  lineHeight: 1.2,
                },
              }}
            >
              Xin chào. Mình là Sơn
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: "-apple-system",
              }}
            >
              Hiện tại mình đang làm Backend developer - Node JS tại Gameloft.
              Đây là blog cá nhân nơi chia sẽ những kiến thức, kinh nghiệm, đời
              sống của một developer là mình :v
            </Typography>
            <Box component="div" sx={{ pt: 3, display: "flex" }}>
              <TextField sx={{ mr: 3, width: 1 }} label="Email" />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "white",
                  background: "#0057FF",
                  pl: 4,
                  pr: 4,
                }}
              >
                Subscribe
              </Button>
            </Box>
            {/* list icon follow me */}
            <Box component="div" sx={{ pt: 3 }}>
              <Typography variant="caption" display="inline-list-item"  > 
                Follow me:
                <Link href="https://www.youtube.com/channel/UCsDgKKk7iBqBlCjJjlEScPg"  target="_blank" sx={{ml:2}}  color="inherit" variant="body2">
                  <FontAwesomeIcon
                    icon={faYoutube}
                  />
                </Link>
                <Link href="https://fb.com/162001son"  target="_blank" sx={{ml:2}}  color="inherit" variant="body2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                  />
                </Link>
                <Link href="https://www.tiktok.com/@sown_dev"  target="_blank" sx={{ml:2}}  color="inherit" variant="body2">
                  <FontAwesomeIcon
                    icon={faTiktok}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/sowndev"  target="_blank" sx={{ml:2}}  color="inherit" variant="body2">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                  />
                </Link>
              </Typography>
            </Box>
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
          }}
        >
          <Box component="div" className={style.ring}>
            <Box component="div" className={style.avatar}>
              <Avatar
                sx={{ height: "99%", width: "99%" }}
                alt="Son"
                src={process.env.PUBLIC_URL + "/avatar.jpg"}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
