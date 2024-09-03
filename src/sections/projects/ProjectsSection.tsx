
import { Grid, Backdrop, CircularProgress } from "@mui/material"
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { GET_PROJECTS_QUERY } from "../../queries/ProjectsQueries";
import React from "react"
import SideProjectCard from "../../components/card/SideProjectCard";
import styled from "@emotion/styled";

const Root = styled("div")(({ theme }) => ({
    "& .list-projects": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }
}));
export default function ProjectsSection() {
    const { data, loading, error } = useQuery(GET_PROJECTS_QUERY);
    return (
        <Root>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <div className="list-projects">
                <Grid container spacing={2}>
                    {
                        data?.projects?.data.map((project: any) => {
                            return (
                                <Grid item xs={12} md={4}>
                                    <SideProjectCard
                                        description={project.attributes.description}
                                        link={project.attributes.websiteUrl}
                                        github={project.attributes.github}
                                        name={project.attributes.name}
                                        technologies={project.attributes.tags.data?.map((technology: any) => (technology.attributes.name))}
                                        thumbnail={`https://cms.sowndev.com${project.attributes.thumbnail.data.attributes.url}`}
                                    />
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </div>
        </Root>
    )
}
