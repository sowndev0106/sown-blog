import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import { Container, styled, Backdrop, CircularProgress, Typography, Divider, Chip } from "@mui/material";
import { useParams, useSearchParams, redirect, Link as LinkRouter } from 'react-router-dom';

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
    const [post, setPost] = useState<IPost>();
    const [openBackdrop, setOpenBackdrop] = useState(false);


    useEffect(() => {
        setOpenBackdrop(true);
        fetchData()
            .then((res) => {
                setPost(res.post);
                setOtherPost(res.otherPosts);
                setBlockMap(res.blockMap);
            })
            .catch((err) => redirect("/404"))
            .finally(() => setOpenBackdrop(false));
    }, [])

    const fetchData = async () => {
        const [resPost, resOtherPost] = await Promise.all([mockDataPost(), mockDataOtherPosts()])
        const resBlockMap = await getStaticProps(resPost.data.notionId)
        return {
            blockMap: resBlockMap,
            post: resPost.data,
            otherPosts: resOtherPost.data
        }
    }

    return (
        <Root maxWidth="md">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* header title */}
            <Typography variant="h3">
                {post?.title}
            </Typography>
            {
                post?.tags.map((tag, index) => (
                    <TagChip
                        label={tag}
                        variant="outlined"
                        size='small'
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
                    otherPosts.map((post, index) => (
                        <div key={index}>
                            <ol className="notion-list notion-list-disc">
                                <li >
                                    <LinkRouter to={`/posts/${post.slug}`} className="link-other-post">{post.title}</LinkRouter>
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

const mockDataPost = async (): Promise<{ data: IPost }> => {
    return {
        data: {
            title: "Logger JS",
            slug: "logger-js",
            tags: ["JavaScript", "Logger", "Library"],
            description: "A simple logger library for JavaScript",
            notionId: "Logger-JS-1360e2df16e748cbbab9f7635f1c3108",
            thumbnail: "http://localhost:3000/assets/avatar.jpg",
        }
    }
}
const mockDataOtherPosts = async (): Promise<{ data: IPost[] }> => {
    return {
        data: [
            {
                title: "Logger JS",
                slug: "logger-js",
                tags: ["JavaScript", "Logger", "Library"],
                description: "A simple logger library for JavaScript",
                notionId: "Logger-JS-1360e2df16e748cbbab9f7635f1c3108",
                thumbnail: "http://localhost:3000/assets/avatar.jpg",
            }, {
                title: "Create and authorization discord bot",
                slug: "create-and-authorization-discord-bot",
                tags: ["JavaScript", "Logger", "Library"],
                description: "A simple logger library for JavaScript",
                notionId: "Logger-JS-1360e2df16e748cbbab9f7635f1c3108",
                thumbnail: "http://localhost:3000/assets/avatar.jpg",
            }, {
                title: "Init project Discord bot",
                slug: "init-project-discord-bot",
                tags: ["JavaScript", "Logger", "Library"],
                description: "A simple logger library for JavaScript",
                notionId: "Logger-JS-1360e2df16e748cbbab9f7635f1c3108",
                thumbnail: "http://localhost:3000/assets/avatar.jpg",
            }

        ]
    }
}
