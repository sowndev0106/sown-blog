import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';
import ExperienceCard from '../../components/card/ExperienceCard';
const Root = styled(Box)(({ theme }) => ({
    "& .title": {
        marginBottom: 20,
    }
}));
const contents = [
    {
        title: 'NodeJs - APIs service',
        details: [
            "Developed user authorization and activity logging for APIs.",
            "Integrated and improved functionalities in various projects.",
            "Implemented APIs for subscription management and game code delivery via E- Mail.",
            "Created a service to fetch and store posts from YouTube, Discord, and Facebook.",
            "Designed and built backend systems for a Discord bot and CMS dashboard."
        ],
    }, {
        title: 'Discord bot ',
        details: [
            "Experienced in creating and managing Discord bots with diverse features.",
            "Implemented message scheduling, feedback collection, and event handling from users.",
            "Integrated interactive mini- games with leaderboards",
        ],
    }, {
        title: 'CMS dashboard',
        details: [
            " Developed a CMS dashboard for Discord bots using React JS.",
            "Configured and customized controllers in Strapi CMS."
        ],
    }
];

export default function ExperienceSection() {
    return (

        <Root>
            <Typography variant='subtitle2' className='title'>Experience</Typography>
            <ExperienceCard
                time='May 2022 - Present'
                company='Gameloft - Web Marketing Team'
                position='Backend Developer'
                companyLogo='/assets/gameloft_logo.png'
                companyLink='https://www.gameloft.com/gameloft-studios/saigon'
                content={contents}
            />
        </Root>
    );
}
