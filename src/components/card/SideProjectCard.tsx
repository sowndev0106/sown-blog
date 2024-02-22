
import Typography from '@mui/material/Typography'; import {
    Box,
    SxProps,
    Theme,
    styled, CardHeader, Avatar, IconButton, CardMedia, CardContent, CardActions, Tooltip, Chip, Button
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from 'react-router-dom';
import { faLink, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
interface IProps {
    link?: string;
    github: string;
    name: string;
    thumbnail: string;
    description: string;
    technologies: string[];
    sx?: SxProps<Theme>
}
const Root = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    textAlign: "left",
}))
const Card = styled("div")(({ theme }) => ({
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 20px -20px;",
    maxWidth: "350px",
    borderRadius: "10px",
    position: "relative",
    "& .action-icons": {
        display: "flex",
        flexWrap: "nowrap"
    },
    "& .head": {
        display: "flex",
        justifyContent: "space-between",
    },
    "& .icon": {
        // color: "#00bdf2",
        color: "#ff6723",
        fontSize: "1rem"
    }
}))
const BoxCardMedia = styled(Box)(({ theme }) => ({
    height: 140,
    padding: "5px",
    border: "1px solid rgb(255 255 255 / 70%)",
    borderRadius: "15px",
    ":hover": {
        border: "1px solid #ff6723",
    }
}))

const SideProjectCard = (props: IProps) => {
    return (
        <Root>
            <Card sx={{ ...props.sx, }}>
                <BoxCardMedia >
                    <CardMedia component={RouterLink} to={props.link || props.github} target='_blank'
                        sx={{ height: "100%", borderRadius: "10px" }}
                        image={props.thumbnail}
                        title="green iguana"
                    />
                </BoxCardMedia>
                <div>
                    <CardContent>
                        <Box className='head'>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.name}
                            </Typography>
                            <Box className='action-icons'>
                                <div>    {
                                    props.link &&
                                    <Tooltip title={"View on deployment"}>
                                        <IconButton aria-label="share" component={RouterLink} to={props.link} target='_blank'>
                                            <FontAwesomeIcon icon={faExternalLink} className='icon' />
                                        </IconButton>
                                    </Tooltip>
                                }</div>

                                <div> <Tooltip title={"View on github"}>
                                    <IconButton aria-label="add to favorites" component={RouterLink} to={props.github} target='_blank'>
                                        <FontAwesomeIcon icon={faGithub} className='icon' />
                                    </IconButton>
                                </Tooltip></div>
                            </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
                            {
                                props.technologies.map((item, index) => (
                                    <Box key={index} sx={{ marginRight: "5px", marginBottom: "5px" }}>
                                        <Chip label={item} variant="filled" color="info" sx={{ backgroundColor: "#192742", color: "white" }} size='medium' />
                                        {/* <Button size='small' variant="contained" color="secondary" sx={{ backgroundColor: "#192742", textTransform: 'none' }} >{item} </Button> */}
                                    </Box>
                                ))
                            }
                        </Box>
                    </CardContent>

                </div>
            </Card>
        </Root>
    );
}
export default SideProjectCard;