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
      <Grid container columns={12} sx={{pt:10,pb:10}} >
        <Grid item md={6}  sx={{ display:"flex",justifyContent:"left", alignItems:"center" }}>
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
        <Grid item  md={6}  sx={{display:"flex", justifyContent:"center"}}>
        <Box  component="div" className={style.ring}>
        <Box component="div" className={style.avatar} >
            <Avatar sx={{ height: '99%', width: '99%' }} alt="Son" src="https://scontent.fdad5-1.fna.fbcdn.net/v/t39.30808-6/286557850_1226246511245126_3981785525255104233_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KNYHlRplDD8AX-tGr7f&_nc_ht=scontent.fdad5-1.fna&oh=00_AT_iwR6yVs6NBeqegHB1Je-_uhQ9IoYH62nPhR_tYgvZzw&oe=634CFBFB" />
          </Box>
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
