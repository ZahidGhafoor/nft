import React from 'react'
import "./Navbar.scss"


import logo from "../../Assets/logo.png"
import discord from "../../Assets/discord.svg"
import insta from "../../Assets/insta.svg"
import twiter from "../../Assets/twiter.svg"

const Navbar = () => {
    return (
        <>
            <div className="top__line">
                <div className="logo">
                    <img src={logo} alt="" className="mainlog" />
                </div>
                <div className="social__icons">
                    <img src={discord} alt="" className="mainlog" />
                    <img src={insta} alt="" className="mainlog" />
                    <img src={twiter} alt="" className="mainlog" />

                    <div className="sea">
                        Connect Wallet
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar