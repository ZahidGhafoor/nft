import React from 'react'

import { TiTick } from "react-icons/ti"
import { AiOutlineAim } from "react-icons/ai"
import { IoIosArrowForward as ArrowForwardIosSharpIcon } from "react-icons/io"

import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { Parallax } from "react-parallax";

import Ship from "../../Assets/ship.gif"

import "./Faq.scss"


let greenData = [
    {
        title: "First discussions about Sandaga",
        date: 'August 2018',
        detail: "First meetings between Hélène, Rayann and Ludovic about Sandaga. The main idea was to build a platform where artists from all over the world, regardless of their digital skills, could create, display and sell their art."
    },
    {
        title: "Birth of the Marauders",
        date: 'August 2021',
        detail: "After many weeks of brainstorming, the creative team dives into the creation of the Metaverse Marauders collection. More than 1,000 hours of drawing, inking and coloring were necessary to create the 1620 traits, 20 shapes and 16 ultra detailed backgrounds that make up the 12,000 Metaverse Marauders."
    },
    {
        title: "​​Presale on Arbitrum (ETH L2)",
        date: 'September 2021',
        detail: "First public pre-sale on Arbitrum (Ethereum Layer 2). Lightning fast transactions and very low gas fees for OG Marauders. MARAUDERS NEVER FORGET."
    },
    {
        title: "First spaceship on ETH (L1)",
        date: 'October 2021',
        detail: "A first spaceship landed on Ethereum filled with Marauders to mint. Will be followed by other spaceships."
    },
    {
        title: "First spaceship on ETH (L1)",
        date: 'October 2021',
        detail: "A first spaceship landed on Ethereum filled with Marauders to mint. Will be followed by other spaceships."
    },
    {
        title: "First spaceship on ETH (L1)",
        date: 'October 2021',
        detail: "A first spaceship landed on Ethereum filled with Marauders to mint. Will be followed by other spaceships."
    },
    {
        title: "First spaceship on ETH (L1)",
        date: 'October 2021',
        detail: "A first spaceship landed on Ethereum filled with Marauders to mint. Will be followed by other spaceships."
    },
    {
        title: "First spaceship on ETH (L1)",
        date: 'October 2021',
        detail: "A first spaceship landed on Ethereum filled with Marauders to mint. Will be followed by other spaceships."
    },

]


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: " #19181b",
    boxShadow: "0 10px 30px 0 rgb(37 177 144 / 50%)",
    width: "calc(50% - 31px)",
    fontFamily: "Poppins",
    margin: '0 0 2rem 0',
    color: "white",
    border: `none`,
    padding: ".5rem",
    borderRadius: ".7rem",
    cursor: 'pointer',
    "&::hover": {
        // backgroundColor: "red"
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon color='white' size="1rem" />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const Faq = () => {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <div className="roadmap_container">
                <div className="box">
                    <Parallax
                        renderLayer={(percentage) => {
                            let t = percentage * 900
                            return (
                                <div className="ship4" style={{ transform: `translateX(${-t + 200}px) translateY(${t - 466}px)` }} >
                                    <img src={Ship} alt="ERROR" />
                                </div>
                            )
                        }}
                    >
                    <div className="title"> Roadmap </div>
                    <div className="data">

                        {
                            greenData.map((data, index) => {
                                return (
                                    <>
                                        <div className="acordian_box">
                                            <div className="line">
                                                <div className="tick"> <TiTick /> </div>
                                                <p></p>
                                            </div>
                                            {/* <div className="acordian"> */}
                                            <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <div className="name">
                                                        <div className="done">
                                                            Done
                                                        </div>
                                                        <div className="detail">
                                                            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}> {data.title} </p>
                                                            <p className='date'> {data.date} </p>
                                                        </div>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        {data.detail}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            {/* </div> */}
                                        </div>
                                    </>
                                )
                            })
                        }

                                           </div>
                    </Parallax>
                </div>
            </div>
        </>
    )
}

export default Faq