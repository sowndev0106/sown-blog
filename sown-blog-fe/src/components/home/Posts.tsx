import { Container } from "@mui/system";


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import avatar from "..//..//assets/avatar.jpg";
export default function Posts() {
    const theme = useTheme();

    return (
        <Container component={"div"} sx={{ mt: 4, mb: 10 }}>
            <Typography variant="overline" display="block" gutterBottom sx={{ fontSize: "25px", fontWeight: 500 }}>
                Featured posts
            </Typography>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: {

                            lg: 300,
                            xl: 250,
                            md: 200,
                            sm: 150,
                            xs: 100
                        }
                    }}
                    image={avatar}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>
            </Card>
        </Container>
    );
}