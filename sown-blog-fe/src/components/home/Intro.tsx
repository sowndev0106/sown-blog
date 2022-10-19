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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "..//..//assets/avatar.jpg";

export default function Intro() {
  return (
      <Grid container columns={12} spacing={10} sx={{ height:"90vh", px:{
        lg:20,
        xl:20,
        md:10,
        sm:10,
        xs:5
      },mb:10}}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: {
              xs:"center",
              sm:"center",
              md:"center",
              lg:"left",
              xl:"left"
            },
          }}
        >
          <Grid sx ={{display: "flex", flexDirection:"column"}}>
            <Typography
              sx={{
                fontSize: {
                  xl:"50px",
                  lg:"45px",
                  md:"40px",
                  xs:"35px",
                },
                fontFamily: "-apple-system",
                body: {
                  fontWeight: 1800,
                },
         
              }}
            >
              Xin chào. Mình là Sơn
            </Typography>
            
            <Typography
              sx={{
                mt:1,
                fontSize: 18,
                fontWeight:400,
                fontFamily: "-apple-system",
              }}
            >
              Hiện tại mình đang làm Backend developer - Node JS tại Gameloft.
              Đây là blog cá nhân nơi chia sẽ những kiến thức, kinh nghiệm, đời
              sống của một developer là mình :v
            </Typography>
            <Box component="div" sx={{ pt: 3, display: "flex" ,width:{
                md:"100%"
            }}}>
              <TextField sx={{ mr: 3 , flex:1 }} label="Email" />
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
            <Box component="div" sx={{ pt: 3, display:"flex", alignItems:"center" }}>
              <Typography variant="caption" display="inline-list-item" color={"secondary"} sx={{fontSize:15, fontWeight:500}} > 
                Follow me:
              </Typography>
              <Link href="https://www.youtube.com/channel/UCsDgKKk7iBqBlCjJjlEScPg"  target="_blank" sx={{ml:2}}  color="inherit" variant="h6">
                  <FontAwesomeIcon
                    icon={faYoutube}
                  />
                </Link>
                <Link href="https://fb.com/162001son"  target="_blank" sx={{ml:2}}  color="inherit" variant="h6">
                  <FontAwesomeIcon
                    icon={faFacebook}
                  />
                </Link>
                <Link href="https://www.tiktok.com/@sown_dev"  target="_blank" sx={{ml:2}}  color="inherit" variant="h6">
                  <FontAwesomeIcon
                    icon={faTiktok}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/sowndev"  target="_blank" sx={{ml:2}}  color="inherit" variant="h6">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                  />
                </Link>
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
                src={avatar}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}
