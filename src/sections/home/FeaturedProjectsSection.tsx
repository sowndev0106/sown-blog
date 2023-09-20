import { Typography, Divider, Container, Box, Chip, Grid } from "@mui/material";
import { GET_POSTS_QUERY } from "../../queries/PostsQueries";
import PostCard from "../../components/card/PostCard";
import { useQuery } from "@apollo/client";
import { Link as RouterLink } from 'react-router-dom';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { GET_PROJECTS_QUERY } from "../../queries/ProjectsQueries";
import SideProjectCard from "../../components/card/SideProjectCard";
import { styled } from "@mui/styles";
const ListProjects = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
}));
export default function FeaturedProjectsSection() {
    const { data, loading, error } = useQuery(GET_PROJECTS_QUERY, {
        variables: {
            limit: 4,
        }
    });
    return (

        <>
            <Container maxWidth="xl">
                <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    sx={{ fontSize: "25px", fontWeight: 500, mt: 8 }}
                >
                    Featured projects
                </Typography>

                <Divider sx={{ mt: 2, mb: 4 }} />

                <ListProjects className="list-projects" >
                    <Grid container spacing={2}>
                        {
                            data?.projects?.data.map((project: any) => {
                                return (
                                    <Grid item xs={12} md={6} lg={3} xl={3}>
                                        <SideProjectCard
                                            description={project.attributes.description}
                                            link={project.attributes.websiteUrl}
                                            github={project.attributes.github}
                                            name={project.attributes.name}
                                            technologies={project.attributes.tags.data?.map((technology: any) => (technology.attributes.name))}
                                            thumbnail={project.attributes.thumbnail.data.attributes.url}
                                        />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </ListProjects>

                <Box component={RouterLink} to="/projects" target='_blank' sx={{ width: "100%", justifyContent: "center", display: "flex", textDecoration: "none", mt: 3 }}>
                    <Chip label="Show more posts" variant='outlined' color='info' icon={<KeyboardArrowDownIcon />} sx={{ borderColor: "#ff6723", color: "#ff6723", textDecoration: "none" }} />
                </Box>

            </Container>
        </>
    )
}