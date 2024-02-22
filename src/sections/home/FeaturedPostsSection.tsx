import { Typography, Divider, Container, Box, Chip } from "@mui/material";
import { GET_POSTS_QUERY } from "../../queries/PostsQueries";
import PostCard from "../../components/card/PostCard";
import { useQuery } from "@apollo/client";
import { Link as RouterLink } from 'react-router-dom';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FeaturedPostsSection() {
    const postsRes = useQuery(GET_POSTS_QUERY, {
        variables: {
            limit: 3,
        }
    });
    return (

        <>

            <Container maxWidth="xl">
                <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    sx={{ fontSize: "25px", fontWeight: 500 }}
                >
                    Featured posts
                </Typography>

                <Divider sx={{ mt: 2, mb: 4 }} />

                {
                    postsRes?.data?.posts && postsRes.data.posts.data.map((post: any) => {
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

                <Box className='more-project' component={RouterLink} to="/posts" target='_blank' sx={{ width: "100%", justifyContent: "center", display: "flex", textDecoration: "none" }}>
                    <Chip label="Show more posts" variant='outlined' color='info' icon={<KeyboardArrowDownIcon />} sx={{ borderColor: "#ff6723", color: "#ff6723", textDecoration: "none" }} />
                </Box>

            </Container>
        </>
    )
}