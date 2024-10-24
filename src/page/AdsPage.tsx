import { Box, Grid, Typography, styled, Button, Chip } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import ContactIcons from '../components/theme/contact-icon/ContactIcons';
import { Divider } from '@mui/material';
import AboutMeSection from '../sections/resume/AboutMeSection';
import SkillSection from '../sections/resume/SkillSection';
import ServiceSection from '../sections/resume/ServiceSection';
import ExperienceSection from '../sections/resume/ExperienceSection';
import EducationSection from '../sections/resume/EducationSection';
import SideProjectSection from '../sections/resume/SideProjectSection';
import DownloadIcon from '@mui/icons-material/Download';
import { Link as RouterLink } from 'react-router-dom';
const Root = styled(Container)(({ theme }) => ({
    fontFamily: "-apple-system",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 100px)",
    maxHeight: "1032px",

}));


export default function AdsPage() {

    return (
        <>
            <Root>
                <h1>ADS Page</h1>
            </Root>
        </>
    )
}
