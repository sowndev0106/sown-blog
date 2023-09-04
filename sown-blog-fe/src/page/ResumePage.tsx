import { Box, Grid, Typography, styled, } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import ContactIcons from '../components/theme/contact-icon/ContactIcons';
import { Divider } from '@mui/material';
import AboutMeSection from '../sections/resume/AboutMeSection';
import SkillSection from '../sections/resume/SkillSection';
import ServiceSection from '../sections/resume/ServiceSection';
import ExperienceSection from '../sections/resume/ExperienceSection';

const Root = styled(Container)(({ theme }) => ({
    fontFamily: "-apple-system",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 100px)",
}));


const CardResume = styled(Box)(({ theme }) => ({
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    height: "100%",
    maxHeight: "1000px",
    width: "100%",
    borderRadius: "10px",
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
    height: "100%",

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
    height: "100%",
    maxHeight: "calc(100vh - 135px)",
    overflow: "scroll",
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
                        <Grid item xs={6}>
                            <ImageCard>
                                <CCardMedia image='/assets/avatar_resume_2.jpg' >
                                </CCardMedia>
                                <ImageInfoCard  >
                                    <Typography variant='subtitle2' className='name' >Nguyễn Thanh Sơn</Typography>
                                    <Typography variant='subtitle2' className='role' >Software developer</Typography>
                                    <div className='contact-icons'>
                                        <ContactIcons />
                                    </div>
                                </ImageInfoCard>
                            </ImageCard>
                        </Grid>
                        <Grid item xs={6}>
                            <InformationCard>
                                <AboutMeSection />
                                <CDivider />

                                <SkillSection />
                                <CDivider />

                                <ServiceSection />
                                <CDivider />

                                <ExperienceSection />
                                <CDivider />
                            </InformationCard>

                        </Grid>
                    </Grid>
                </CardResume>
            </Root>
        </>
    )
}
