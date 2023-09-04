import {
    Box,
    Typography,
    Link,
    SxProps,
    Theme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTiktok,
    faYoutube,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface IProps {
    title?: string,
    sx?: SxProps<Theme>
}
const ContactIcons = (props: IProps) => {
    return <>
        <Box component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "center", ...props.sx }}>
            <Typography variant="caption" display="inline-list-item" color={"secondary"} sx={{ fontSize: 15, fontWeight: 500 }} >
                {props.title}
            </Typography>
            <Link href="https://www.youtube.com/channel/UCsDgKKk7iBqBlCjJjlEScPg" target="_blank" sx={{ ml: 2 }} color="inherit" variant="h6">
                <FontAwesomeIcon
                    icon={faYoutube}
                />
            </Link>
            <Link href="https://fb.com/162001son" target="_blank" sx={{ ml: 2 }} color="inherit" variant="h6">
                <FontAwesomeIcon
                    icon={faFacebook}
                />
            </Link>
            <Link href="https://www.tiktok.com/@sown_dev" target="_blank" sx={{ ml: 2 }} color="inherit" variant="h6">
                <FontAwesomeIcon
                    icon={faTiktok}
                />
            </Link>
            <Link href="https://www.linkedin.com/in/sowndev" target="_blank" sx={{ ml: 2 }} color="inherit" variant="h6">
                <FontAwesomeIcon
                    icon={faLinkedin}
                />
            </Link>
        </Box>
    </>
}
export default ContactIcons;