import Intro from "../sections/home/Intro";
import FeaturedPostsSection from "../sections/home/FeaturedPostsSection";
import FeaturedProjectsSection from "../sections/home/FeaturedProjectsSection";
import { styled } from "@mui/styles";
import { Typography, Box, Chip } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink } from 'react-router-dom';
const Root = styled('div')(({ theme }) => ({
    overflow: "hidden",
}));
export default function HomePage() {

    return (
        <Root>
            <title>Home</title>
            <Intro />
            <FeaturedPostsSection />
            <FeaturedProjectsSection />

            <Typography
                variant="overline"
                display="block"
                gutterBottom
                sx={{ fontSize: "25px", fontWeight: 500, mt: 8 }}
            >
                ABOUT ME
            </Typography>
            <Box component={RouterLink} to="/resume" target='_blank' sx={{ width: "100%", justifyContent: "center", display: "flex", textDecoration: "none", mt: 3 }}>
                <Chip label="Show my resume" variant='outlined' color='info' sx={{ borderColor: "#ff6723", color: "#ff6723", textDecoration: "none" }} />
            </Box>

        </Root>
    )
}
