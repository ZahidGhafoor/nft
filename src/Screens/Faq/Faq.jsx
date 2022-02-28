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
        title: "What are StartSign NFTs?",
        date: 'August 2021',
        detail: "Let’s break it down: An NFT is a Non-Fungible Token that represents a one-of-a-kind digital asset like music, videos, art and more. This unique digital representation serves as a certificate of authenticity and is recorded on the blockchain."
    },
    {
        title: "When can I mint a StartSign NFT?",
        date: 'August 2018',
        detail: "The Pre-Sale and Public-Sale will be announced soon.."
    },
    {
        title: "​​Is there a Whitelist",
        date: 'September 2021',
        detail: "Yes! Secure a spot on our Whitelist to make sure you get a Martian Ape at a reduced price before they go on public sale. Our Whitelist system is divided into 2 exclusive clubs.."
    },
    {
        title: "What blockchain are the StartSign NFT's on?",
        date: 'October 2021',
        detail: "The Martian Apes Collection is on the Ethereum Blockchain’s ERC-721 token. File are hosted through the IPFS."
    },
    {
        title: "What can I do with my StartSign NFT?",
        date: 'October 2021',
        detail: "You can use your Martian Ape NFT as an awesome profile pic for your socials or in any other way you want since you have unlimited commercial rights over it! The universe is the limit!"
    },
    {
        title: "How can I mint a StartSign NFT?",
        date: 'October 2021',
        detail: "The simplest way of minting a Martian Ape is by downloading the Metamask extension on your browser and connecting your ETH wallet to it. Make sure you have enough ETH to cover the NFT price and gas fees."
    },
    {
        title: "Where can I see my NFT's after minting it?",
        date: 'October 2021',
        detail: "Once you’ve successfully minted a Martian Ape NFT, you can view it by connecting it to your OpenSea wallet."
    },
    {
        title: "Who’s behind the StartSign?",
        date: 'October 2021',
        detail: "We’re a team of digital creators and early adopters of cryptocurrency and blockchain tech with a vivid imagination, a love for artwork, and years of experience in online marketing and community management. We believe that NFTs are the perfect space to bring our creative flair, crypto contacts, and marketing expertise together to create the successful digital project we’ve always envisioned."
    },
    {
        title: "How do I contact the team?",
        date: 'October 2021',
        detail: "Hit us up on our Discord, where you can open a ticket for direct communication with our team! You could also email us at contact@startsign.io. We’re expecting an astronomical number of inquiries though, so we might not get back to you before the Public Sale begins."
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
                    <div className="title"> FAQ </div>
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