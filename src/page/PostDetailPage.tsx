import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import { Container, styled, Backdrop, CircularProgress, Typography, Divider, Chip } from "@mui/material";
import { useParams, useSearchParams, redirect, Link as LinkRouter, useNavigate } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { GET_POSTS_QUERY } from "../queries/PostsQueries";

export async function getStaticProps(notionPageId: string) {
    const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${notionPageId}`
    ).then(res => res.json());
    return data
}
interface IPost {
    title: string,
    slug: string,
    thumbnail: string,
    description: string,
    tags: string[],
    notionId: string,
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
const TagChip = styled(Chip)(({ theme }) => ({
    marginRight: "10px",
    marginTop: "10px",
}));
export default function PostPage() {
    let { slug } = useParams();
    const [blockMap, setBlockMap] = useState(null);
    const [otherPosts, setOtherPost] = useState<IPost[]>([]);
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const navigate = useNavigate();
    const postRes = useQuery(GET_POSTS_QUERY, {
        variables: {
            slug: slug,
            limit: 1
        }
    });
    const orderPostRes = useQuery(GET_POSTS_QUERY, {
        variables: {
            limit: 10,
        }
    });
    useEffect(() => {
        if (!postRes.loading) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            console.log(postRes.data)
            setOpenBackdrop(true);
            getStaticProps(postRes.data.posts.data[0].attributes.notionId)
                .then((res) => {
                    setBlockMap(res);
                })
                .catch((err) => navigate("/404"))
                .finally(() => setOpenBackdrop(false));
        }
    }, [postRes.loading, slug])


    return (
        <Root maxWidth="md">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* header title */}
            <Typography variant="h4">
                {postRes?.data?.posts?.data[0]?.attributes?.title}
            </Typography>
            {
                postRes?.data?.posts?.data[0]?.attributes?.tags.data.map((value: any, index: number) => (
                    <TagChip
                        label={value.attributes.name}
                        variant="outlined"
                        size='small'
                        key={index}
                        color="info" />
                ))
            }

            <Divider sx={{ mt: 2, mb: 4 }} />

            {/* notion content */}
            {blockMap && <NotionRenderer blockMap={blockMap} />}

            {/* other bot */}
            <div>
                <h1>Other post</h1>
                {
                    orderPostRes?.data?.posts?.data.map((post: any, index: number) => (
                        post?.attributes?.slug === slug ? <></> :
                            <div key={index}>
                                <ol className="notion-list notion-list-disc">
                                    <li >
                                        <LinkRouter to={`/posts/${post?.attributes?.slug}`} className="link-other-post">{post?.attributes?.title}</LinkRouter>
                                    </li>
                                </ol>
                                <div></div>
                            </div>
                    ))
                }
            </div>
        </Root>
    )
}