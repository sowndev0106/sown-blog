import * as React from 'react';
import { Box, List, ListItem, Grid, Divider, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';
import ExperienceCard from '../../components/card/ExperienceCard';
import SideProjectCard from '../../components/card/SideProjectCard';
import { Link as RouterLink } from 'react-router-dom';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import DeleteIcon from '@mui/icons-material/Delete';
const Root = styled(Box)(({ theme }) => ({
    "& .title": {
        marginBottom: 20,
    }
}));
const CDivider = styled(Divider)(({ theme }) => ({
    margin: "20px 0px",
}))

export default function SideProjectSection() {
    return (

        <Root>
            <Typography variant='subtitle2' className='title'>Side Project</Typography>

            <Box sx={{ margin: "5%" }}>
                <SideProjectCard
                    description='It is an extension tool designed to assist students who may have difficulty calculating their scores on university website'
                    link='https://chrome.google.com/webstore/detail/t%C3%ADnh-%C4%91i%E1%BB%83m-iuh/jjpafikeljpdpfkmkfenabcejepmfjmp?hl=vi'
                    github='https://github.com/nguyenthanhson162001/TinhDiemIUH'
                    name='Tính điểm IUH'
                    technologies={['Typescript', 'Bootstrap', 'Chrome Extension']}
                    thumbnail='/assets/projects/tinh-diem-iuh.png'
                    sx={{ maxWidth: "100%" }}
                />
                <SideProjectCard
                    description="I'm developing the backend for this project to assist lecturers and students with their graduation theses."
                    link='https://quanlykhoaluan-sv-iuh.vercel.app'
                    github='https://github.com/nguyenthanhson162001/manage-graduation-thesis-iuh-be'
                    name='Manage graduation thesis IUH'
                    technologies={['Node-JS', 'My-SQL', "Typescript", 'Redis', "Gitlab-CICD", "Docker", "Microservice"]}
                    thumbnail='/assets/projects/manage-graduation-thesis-iuh-be.png'
                    sx={{ maxWidth: "100%", marginTop: "20px" }}
                />
            </Box>

            <Box className='more-project' component={RouterLink} to="/projects" target='_blank' sx={{ width: "100%", justifyContent: "center", display: "flex", textDecoration: "underline" }}>
                <Chip label="Show more projects" variant='outlined' color='info' icon={<KeyboardArrowDownIcon />} sx={{ borderColor: "#ff6723", color: "#ff6723", textDecoration: "underline" }} />
            </Box>

        </Root>
    );
}
