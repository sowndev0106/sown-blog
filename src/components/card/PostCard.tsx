import * as React from "react";
import { Box, CardActions, Chip, styled, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SxProps, Theme } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from "react-router-dom"
interface ITag {
    name: string,
    slug: string,
}
interface IProps {
    key: string
    title: string,
    slug: string,
    thumbnail: string,
    description: string,
    createdAt: Date,
    tags: ITag[],
    sx?: SxProps<Theme>;
}
const TagChip = styled(Chip)(({ theme }) => ({
    marginRight: "10px",
}));
const CCard = styled(Card)(({ theme }) => ({
    fontFamily: "Work Sans",
    "& .link": {
        cursor: "pointer",
        textDecoration: "none",
        ":hover": {
            textDecoration: "underline",
        }
    },
}));
export default function PostCard(props: IProps) {
    const navigate = useNavigate();
    const handlerRedirect = () => {
        navigate(`/posts/${props.slug}`)
    }
    return (
        <CCard
            key={props.key}

            sx={{
                display: "flex",
                backgroundColor: "rgb(18 18 18 / 0%)",
                backgroundImage: {
                    lg: "none",
                    xl: "none",
                },
                flexDirection: {
                    lg: "row",
                    xl: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                },
                ...props.sx
            }}
        >
            <CardMedia
                onClick={() => handlerRedirect()}
                component="img"
                sx={{
                    width: {
                        lg: 300,
                        xl: 250,
                        md: 250,
                    },
                    mr: 1,
                    maxHeight: {
                        lg: 300,
                        xl: 300,
                        md: 250,
                        sm: 200,
                        xs: 200,
                    },
                    borderRadius: {
                        lg: "5%",
                        xl: "5%",
                    },
                }}
                image={props.thumbnail}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    width: "100%"
                }}
            >
                <CardContent onClick={() => handlerRedirect()} sx={{ width: "100%" }}>
                    <Typography
                        component="div"
                        variant="h6"
                        className="link"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                        className="link"
                        sx={{ fontWeight: 200, mb: 2 }}
                    >
                        {props.description}
                    </Typography>
                    {
                        props.tags.map((tag: ITag) => <TagChip
                            label={tag.name}
                            variant="outlined"
                            size='small'
                            key={tag.slug}
                            color="info" />)
                    }
                    <Divider sx={{ mt: 2 }} variant="fullWidth" />
                    <Typography
                        variant="caption"
                        display="block"
                        color="text.secondary"
                        sx={{ opacity: 0.6, mt: 1 }}
                    >
                        {props.createdAt.toDateString()}
                    </Typography>
                </CardContent>


            </Box>
        </CCard >
    );
}
