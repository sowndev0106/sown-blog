import { Tooltip, Typography, styled, Box, Grid } from '@mui/material';
import React from "react"
import { faCoffee, faGift, IconDefinition, faServer } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import ServiceCard from '../../components/card/ServiceCard';

const Root = styled("div")(({ theme }) => ({
    "& .title": {
        marginBottom: 20,
    }
}));
const Services = styled(Grid)(({ theme }) => ({
    fontSize: "1rem",
}));
// xl: "50px",
//     lg: "45px",
//         md: "40px",
//             xs: "35px",
export default function ServiceSection() {
    return (
        <Root >
            <Typography variant='subtitle2' className='title'>What I Do ? </Typography>
            <Services container spacing={2} >
                <Grid item xl={6} md={6} xs={12}>
                    <ServiceCard
                        icon="\assets\icon\node_js.png"
                        title='Backend - NodeJS'
                        content="I excel in Node.js for creating high-performance server-side apps with Express.js. I'm skilled in database design, RESTful API development, authorization..." />

                </Grid>
                <Grid item xl={6} md={6} xs={12}>
                    <ServiceCard
                        icon="\assets\icon\react_js.png"
                        title='Frontend - ReactJS'
                        content='I have experience in React.js for creating front-end applications, especially for CMS dashboards.' />
                </Grid>
                <Grid item xl={6} md={6} xs={12}>
                    <ServiceCard
                        icon="\assets\icon\deploy.png"
                        title='Deployment'
                        content='I am proficient in deploying applications using Docker, CI/CD pipelines, and AWS EC2.' />
                </Grid>
                <Grid item xl={6} md={6} xs={12}>
                    <ServiceCard
                        icon="\assets\icon\discord.png"
                        title='Discord Bot'
                        content='I have experience in creating numerous Discord bots with a wide range of functionalities, including specialized bot functions.' />

                </Grid>
            </Services>
            {/* <FontAwesomeIcon /> */}

        </Root>
    );
}