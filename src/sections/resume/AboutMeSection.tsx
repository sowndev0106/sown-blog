import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Tooltip, Typography, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React from "react"
const Root = styled("div")(({ theme }) => ({
    "& .title": {
        fontSize: "2.5rem !important",
    },
    "& .key-name": {
        color: "#ff6723"
    },
    "& .slash": {
        color: theme.palette.text.secondary,
    },
    "& .keys": {
        marginBottom: "15px",
        display: "flex",
        gap: 5,
    }
}));

const Contacts = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    margin: "0px 20px 20px 10px",
    gap: 5,
    fontSize: "1rem",
    "& .contact": {
        display: "flex",
        gap: 5,
    }
}));
const keyPoints = ["Backend Developer", " NodeJS"]
const lengthKeys = keyPoints.length;
export default function AboutMe() {
    const [isShowContact, setIsShowContact] = React.useState(false);
    const handlerClickShowContact = () => {
        setIsShowContact(!isShowContact);
    }
    return (
        <Root className='about-me'>
            <Typography variant='subtitle2' className='title'>About me</Typography>

            <div className='keys'>
                {keyPoints.map((key, index) => {
                    return (
                        <>
                            <Typography variant='subtitle2' className='key-name' >{key}</Typography>
                            {lengthKeys - 1 !== index && <span className='slash'> /</span>}
                        </>
                    )
                })}
            </div>
            <Typography component="span" onClick={handlerClickShowContact} variant='inherit' className='show-contact'  >
                <Tooltip title="Show contact"><span >Contact</span></Tooltip>
                {isShowContact ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} </Typography>
            {isShowContact && <Contacts>
                <div className='contact'>
                    <PhoneEnabledIcon fontSize="small" />
                    <span className='text'>0394566461</span>
                </div>
                <div className='contact'>
                    <AlternateEmailIcon fontSize="small" />
                    <span className='text'>nguyenthanhson162001@gmail.com</span>
                </div>
                <div className='contact'>
                    <LocationOnIcon fontSize="small" />
                    <span className='text'>Go Vap, Ho Chi Minh</span>
                </div>
            </Contacts>}
            <Typography variant='subtitle1' className='sub-title'>Seeking a challenging position as a Backend Developer, applying my software engineering expertise in development, design, and product maintenance to meet user needs. Eager to collaborate effectively with teams and contribute to organizational success while fostering personal growth.</Typography>
        </Root>
    );
}
