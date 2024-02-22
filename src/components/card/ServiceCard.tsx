
import Typography from '@mui/material/Typography'; import {
    Box,
    SxProps,
    Theme,
    styled,
    Avatar,
    CardMedia
} from "@mui/material";
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface IProps {
    title: string,
    icon: string,
    content: string,
    sx?: SxProps<Theme>
}
const Card = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginBottom: "20px",
    "& .icon": {
        fontSize: "2rem",
        color: theme.palette.primary.main,
    }
}));
const ServiceCard = (props: IProps) => {
    return (
        <Card>
            <Box
                component="img"
                alt="The house from the offer."
                src={props.icon}
                sx={{ width: 40, height: 40 }}
            />

            <Box>
                <Typography gutterBottom variant="h6" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
            </Box>
        </Card>
    );
}
export default ServiceCard;