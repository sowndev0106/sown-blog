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
    const [posts, setPosts] = useState<IPost[]>([]);
    const [openBackdrop, setOpenBackdrop] = useState(false);


    useEffect(() => {
        setOpenBackdrop(true);
        mockDataPosts()
            .then((res) => {

            })
            .catch((err) => redirect("/404"))
            .finally(() => setOpenBackdrop(false));
    }, [])


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
                Posts
            </Typography>

        </Root>
    )
}


const mockDataPosts = async (): Promise<{ data: IPost[] }> => {
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
