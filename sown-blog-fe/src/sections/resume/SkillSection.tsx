import { Typography, styled, Chip, Avatar } from '@mui/material';
const Root = styled("div")(({ theme }) => ({
    "& .title": {
        fontSize: "1.5rem",
    },
}));
const Skills = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    fontSize: "1rem",
    "& .contact": {
        display: "flex",
        gap: 5,
    },
    "& .skill": {
        position: "relative",
    }

}));

const SkillChip = styled(Chip)(({ theme }) => ({
    marginLeft: "10px",
    marginBottom: "10px",
}));
const dataSkills = [{
    title: "Languages",
    skills: ["Typescript", "Javascript", "Java", " C/C++"],
    isPlus: true,
}, {
    title: "Framework & library",
    skills: ["Express", "React-JS", "Discord.js", "Material UI"],
    isPlus: true,
}, {
    title: "Additional skills",
    skills: ["CICD", "Docker", "Caching", "Strapi CMS", "AWS - EC2", "AWS-S3", "Git", "HTML", "CSS", "SCSS"],
    isPlus: true,
}, {
    title: "Databases",
    skills: ["MongoDB", "My-SQL", "Redis", "SQL-Server"],
    isPlus: false,
},]

export default function Skill() {
    return (
        <Root className='about-me'>
            <Typography variant='subtitle2' className='title'>Skills</Typography>
            <Skills>
                {dataSkills.map((item, index) => {
                    const skillsElement = item.skills.map((e, index) => {
                        return (
                            <SkillChip
                                label={e}
                                variant="outlined"
                                size='small'
                                color="info"
                            />
                        )
                    })
                    return (
                        <div className='skill'>
                            <Typography variant='caption' className='title-skill'>{item.title}: </Typography>
                            {skillsElement}
                            {
                                item.isPlus && <Chip
                                    label="..."
                                    variant="outlined"
                                    size='small'
                                    color="info"
                                    sx={{ border: "none ", }}
                                />
                            }
                        </div>
                    )
                })}

            </Skills>
        </Root>
    );
}