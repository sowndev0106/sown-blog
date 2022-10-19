import { Container } from "@mui/system";

import * as React from "react";
import { Box, CardActions, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import avatar from "..//..//assets/avatar.jpg";
export default function Posts() {
  return (
    <Container component={"div"} sx={{ mb: 10, p: 5 }}>
      <br />
      <Typography
        variant="overline"
        display="block"
        gutterBottom
        sx={{ fontSize: "25px", fontWeight: 500 }}
      >
        Featured posts
      </Typography>
      <Card
        sx={{
          display: "flex",
          backgroundColor: "rgb(18 18 18 / 0%)",
          backgroundImage: {
            lg: "none",
            xl: "none",
          },
          flexDirection: {
            lg: "row",
            xl: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: {
              lg: 300,
              xl: 250,
              md: 250,
            },
            mr: 3,
            maxHeight: {
              lg: 300,
              xl: 300,
              md: 250,
              sm: 200,
              xs: 200,
            },
            borderRadius: {
              lg: "5%",
              xl: "5%",
            },
          }}
          image={avatar}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <Box component={"div"} sx={{ ml: 2 }}>
            <Chip
              label="Code"
              color="primary"
              sx={{ fontWeight: 500, px: 2, mr: 2 }}
              size="small"
            />
          </Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{ fontFamily: "Work Sans", fontWeight: 600 }}
            >
              Xử lý lỗi (Error handling) trong Node-JS . Trả lỗi về chuẩn, clean
              code, Hạn chế sập server.
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontFamily: "Work Sans" }}
            >
              Before long the searchlight discovered some distance away a
              schooner with all sails set, apparently the same vessel which had
              been noticed earlier in the evening. The
            </Typography>
            <br />
            <Typography
              variant="caption"
              display="block"
              color="secondary"
              gutterBottom
            >
              May 04, 20223 min read
            </Typography>
          </CardContent>

          <CardActions
            disableSpacing
            sx={{ borderTop: 1, borderColor: "rgb(163 176 189 / 20%)" }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
}
