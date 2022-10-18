import { styled } from "@mui/styles";
import { Avatar, Container, Grid, Box,Typography } from "@mui/material";
import style from "./Intro.module.scss"

const Description = styled(Typography)({
  fontSize: 20,
  fontFamily: "-apple-system",
});
//
console.log(style)

export default function Intro() {
  return (
    <Container>
      <Grid container columns={12} spacing={10} sx={{pt:10,pb:10}} >
        <Grid item md={6} xs={12}  sx={{display:"flex", justifyContent:"center", alignItems:"center"}} >
          <Grid>
          <Typography
            sx={{
              fontSize: 50,
              fontFamily: "-apple-system",
              body: {
                fontWeight: 600,
                lineHeight:1.2
              },
            }}
          >
            Xin chào. Mình là Sơn
          </Typography>
          <Description className="description">
            Hiện tại mình đang làm Backend developer
          </Description>
          </Grid>
        </Grid>
        <Grid item  md={6} xs={12} sx={{display:"flex", justifyContent:"center",alignItems:"center"}} >
        <Box  component="div" className={style.ring}>
        <Box component="div" className={style.avatar} >
            <Avatar sx={{ height: '99%', width: '99%' }} alt="Son" src={process.env.PUBLIC_URL+"/avatar.jpg"} />
          </Box>
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
