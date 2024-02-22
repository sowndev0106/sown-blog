import { useState, useEffect } from "react";
import { Container, styled, Backdrop, CircularProgress, Typography, Divider, Chip } from "@mui/material";
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { GET_POSTS_QUERY } from "../queries/PostsQueries";
import PostCard from "../components/card/PostCard";

export async function getStaticProps(notionPageId: string) {
    const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${notionPageId}`
    ).then(res => res.json());
    return data
}
const Root = styled(Container)(({ theme }) => ({
    textAlign: "left",
    fontFamily: "Nunito,sans-serif;",
    fontWeight: "200",
    marginTop: "40px",
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

export default function PostPage() {
    const postsRes = useQuery(GET_POSTS_QUERY, {
        variables: {
            limit: 10,
        }
    });

    return (
        <Root maxWidth="xl">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={postsRes.loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* header title */}
            <Typography variant="h4">
                List posts
            </Typography>

            <Divider sx={{ mt: 2, mb: 4 }} />

            {
                postsRes.data && postsRes.data.posts.data.map((post: any) => {
                    return (
                        <>
                            <PostCard
                                key={post.id}
                                title={post.attributes.title}
                                description={post.attributes.description}
                                slug={post.attributes.slug}
                                thumbnail={post.attributes.thumbnail.data.attributes.url}
                                createdAt={new Date(post.attributes.createdAt)}
                                tags={post.attributes.tags.data.map((tag: any) => {
                                    return { name: tag.attributes.name, slug: tag.attributes.slug }
                                })}
                                sx={{ mb: 4 }}
                            />
                        </>
                    )

                })
            }


        </Root>
    )
}