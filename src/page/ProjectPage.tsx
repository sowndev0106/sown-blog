import ProjectsSection from "../sections/projects/ProjectsSection";
import { Container, Divider, Typography, styled } from "@mui/material"
const Root = styled(Container)(({ theme }) => ({
    textAlign: "left",
    fontFamily: "Nunito,sans-serif;",
    fontWeight: "200",
    '& .notion': {
        color: theme.palette.text.secondary,
    },
    '& h1,h2,h3,h4,h5,h6, li': {
        color: theme.palette.text.primary,
    },
    "& .link-other-post": {
        color: "#58a6ff"
    }
}));

export default function ProjectPage() {

    return (
        <Root>
            <title>Projects</title>
            <Typography variant="h4">
                Projects
            </Typography>
            <Divider sx={{ mt: 2, mb: 4 }} />

            <ProjectsSection />
        </Root>
    )
}
