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


const CardResume = styled(Box)(({ theme }) => ({
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    height: "100%",
    width: "100%",
    borderRadius: "10px",
    overflow: "scroll",
    // hiden scrollbar
    "&::-webkit-scrollbar": {
        display: "none",
    },

}));
const CDivider = styled(Divider)(({ theme }) => ({
    margin: "20px 0px",
}))
const ImageCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: "relative",
    height: "calc(100vh - 100px)",
    maxHeight: "1000px",


}));

const ImageInfoCard = styled("div")(({ theme }) => ({
    fontSize: "2rem",
    position: "absolute",
    bottom: "50px",
    left: "0",
    width: "100%",
    "& .name": {
        fontSize: "2rem",
        color: theme.palette.text.primary,
    },
    "& .role": {
        fontSize: "1rem",
        color: "#ff6723"
    },
    "& .contact-icons": {
        width: "100%",
        textAlign: "center",

    },

}));

const CCardMedia = styled(CardMedia)(({ theme }) => ({
    height: "100%",
    borderRadius: "5px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
}));

const InformationCard = styled("div")(({ theme }) => ({
    padding: "60px 20px 20px 40px",
    textAlign: 'left',
    height: "calc(100vh - 100px)",
    maxHeight: "1000px",
    overflow: "scroll",
    [theme.breakpoints.only('xs')]: {
        overflow: "visible",
        height: "auto",
        maxHeight: "100$",
    },
    "& .title": {
        fontSize: "1.5rem",
    },
    "& .sub-title": {
        color: theme.palette.text.secondary,
    },
    // hiden scrollbar
    "&::-webkit-scrollbar": {
        display: "none",
    },
    "& .show-contact": {
        fontSize: "1rem",
        textDecoration: "underline",
        display: "flex",
        cursor: "pointer",
        marginBottom: "10px",
    }
}));


export default function ResumePage() {

    return (
        <>
            <Root>
                <CardResume>
                    <Grid container >
                        <Grid item xs={12} md={6}>
                            <ImageCard>
                                <CCardMedia image='/assets/avatar_resume_2.jpg' >
                                </CCardMedia>
                                <ImageInfoCard  >
                                    <Typography variant='subtitle2' className='name' >Nguyễn Thanh Sơn</Typography>
                                    <Typography variant='subtitle2' className='role' >Software developer</Typography>
                                    <div className='contact-icons'>
                                        <ContactIcons />
                                    </div>
                                    <Box component={RouterLink} to="https://export-download.canva.com/I4FZo/DAFmtfI4FZo/132/0-2335518304602482498.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230904%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230904T015837Z&X-Amz-Expires=79623&X-Amz-Signature=251c2effa33a787890ba3abaca3eea08992d45394442a7a916f2823e43cf70a4&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27CV-2023.pdf&response-expires=Tue%2C%2005%20Sep%202023%2000%3A05%3A40%20GMT">
                                        <Button color='secondary' variant='outlined' size='small'>
                                            <DownloadIcon /> Download My CV
                                        </Button>
                                    </Box>

                                </ImageInfoCard>
                            </ImageCard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InformationCard>
                                <AboutMeSection />
                                <CDivider />

                                <SkillSection />
                                <CDivider />

                                <ServiceSection />
                                <CDivider />

                                <ExperienceSection />
                                <CDivider />

                                <SideProjectSection />
                                <CDivider />

                                <EducationSection />
                            </InformationCard>

                        </Grid>
                    </Grid>
                </CardResume>
            </Root>
        </>
    )
}
