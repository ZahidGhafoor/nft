import React from 'react'
import "./Footer.scss"


import discord from "../../Assets/discord.svg"
import insta from "../../Assets/insta.svg"
import twiter from "../../Assets/twiter.svg"
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="socials">
                    <img src={discord} alt="" className="mainlog" />
                    <img src={insta} alt="" className="mainlog" />
                    <img src={twiter} alt="" className="mainlog" />
                    <FacebookIcon className="muilog" />


                </div>
                <div className="terms">
                    Terms & Conditions
                </div>
                <div className="copy">
                    © 2022 StartSign. All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Footer