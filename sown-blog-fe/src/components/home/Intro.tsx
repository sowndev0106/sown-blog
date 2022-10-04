import { styled } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
const Title = styled(Typography)({
  fontSize:50,
  fontFamily:'-apple-system',
  body:{
    fontWeight:900,
  }
});
const Description = styled(Typography)({
  fontSize:20,
  fontFamily:'-apple-system',
});
// 

export default function Intro() {
  return (
   <Container>
     <Grid container spacing={2} columns={12} sx={{ mt: 12 }}>
      <Grid item xs={12} md={6}>
        <Title>Xin chào. Mình là Sơn</Title>
        <Description className="description">Hiện tại mình đang làm Backend developer</Description>
      </Grid>
      <Grid item xs={12} md={6}>
        <h2>4</h2>
      </Grid>
    </Grid>
   </Container>
  );
}
