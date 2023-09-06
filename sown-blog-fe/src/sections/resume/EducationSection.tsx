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
        title: 'GPA: 3.15 / 4.0.',
        details: [],
    }, {
        title: 'Published scientific paper at YSC 2023 on "Developing a system for managing the final thesis course."',
        details: [],
    }, {
        title: 'Member of the AI Lab, specializing in web backend and participating in volunteer activities.',
        details: [],
    }, {
        title: 'Picked up user story gathering, analysis, and design with excellent documentation skills.',
        details: [],
    }
];




export default function EducationSection() {
    return (

        <Root>
            <Typography variant='subtitle2' className='title'>Education </Typography>
            <ExperienceCard
                time='May 2019 - Aug 2023'
                company='IUH - Industrial University of Ho Chi Minh City'
                companyLink='https://iuh.edu.vn/en'
                position='Software Engineering'
                content={contents}
            />
        </Root>
    );
}
