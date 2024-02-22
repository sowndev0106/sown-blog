
import Typography from '@mui/material/Typography'; import {
    Box,
    SxProps,
    Theme,
    styled,
    Avatar,
    Grid, Link
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';
import { } from '@fortawesome/free-solid-svg-icons';
interface IProps {
    time: string,
    company: string,
    companyLogo?: string,
    companyLink?: string,
    position: string,
    content: {
        title: string
        details: string[]
    }[],
    sx?: SxProps<Theme>
}
const Card = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginBottom: "20px",
    marginTop: "20px",
    "div": {
        width: "100%"
    },
    "& .icon": {
        fontSize: "2rem",
        color: theme.palette.primary.main,
    },
    "& .header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
    },
    "& .time": {
        color: theme.palette.text.secondary,
    },
    "& .company-name": {
        color: theme.palette.text.primary,
    },
    "& .position": {
        color: "#ff6723"
    },
    "& .details": {
        marginLeft: "20px",
    }


}));
const ExperienceCard = (props: IProps) => {
    return (
        <Card>
            <Box>
                <Box className='header' component="div">
                    <Typography gutterBottom variant="body1" component={RouterLink} to={props.companyLink || "#"} target='_blank' className='company-name' >
                        {props.company}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="span" className='time' >
                        <i>   {props.time}</i>
                    </Typography>
                </Box>
                <Typography gutterBottom variant="body1" component="span" className='position' >
                    {props.position}
                </Typography>
                <Box className='content' component="div">
                    {props.content.map((item, index) => {
                        return (<>
                            <Typography gutterBottom variant="subtitle2" component="p" >
                                ⚡  {item.title}
                            </Typography>

                            {item.details.map((detail, index) => {
                                return (<Typography gutterBottom variant="caption" component="p" className='details' >
                                    🔸 {detail}
                                </Typography>)
                            })}

                        </>)
                    })}
                </Box >
            </Box>
        </Card >
    );
}
export default ExperienceCard;