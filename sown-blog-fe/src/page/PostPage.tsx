import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/styles";
export async function getStaticProps(notionPageId: string) {
    const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${notionPageId}`
    ).then(res => res.json());

    return {
        blockMap: data
    };
}
const Root = styled(Container)(({ theme }) => ({

}));
export default function PostPage() {
    const [blockMap, setBlockMap] = useState(null);

    useEffect(() => {
        getStaticProps("Logger-JS-1360e2df16e748cbbab9f7635f1c3108").then(res => {
            setBlockMap(res.blockMap);
        });
    }, []);

    return (
        <Root>
            {blockMap && <NotionRenderer blockMap={blockMap} />}
        </Root>
    )
}
