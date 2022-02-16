import React from 'react'
import "./Home.scss"

// icons
import logo from "../../Assets/logo.svg"
import discord from "../../Assets/discord.svg"
import insta from "../../Assets/insta.svg"
import twiter from "../../Assets/twiter.svg"
import gif from "../../Assets/home.gif"

const Home = () => {
    return (
        <>
            <div className="home__container">
                <div className="top__line">
                    <div className="logo">
                        <img src={logo} alt="" className="mainlog" />
                    </div>
                    <div className="social__icons">
                        <img src={discord} alt="" className="mainlog" />
                        <img src={insta} alt="" className="mainlog" />
                        <img src={twiter} alt="" className="mainlog" />

                        <div className="sea">
                            Buy on OpenSea
                        </div>

                    </div>
                </div>
                <div className="body">
                    <div className="left">
                        <div className="first">ALIEN</div>
                        <div  className="line2">
                            <div className="first">$ECRET</div>
                            <div className="text">SPORTS</div>
                        </div>
                        <div className="first">$OCIETY</div>

                        <div className="left__para">
                            A$$ is the future of networking business investing and entertainment
                        </div>

                        <div className="left__btn">Buy on OpenSea</div>
                    </div>

                    <div className="right">
                        <img src={gif} alt="" className="right__gif" />
                    </div>



                </div>

                <div className="navbar">
                    <div className="item">HOME</div>
                    <div className="item">VISION</div>
                    <div className="item">MISSION</div>
                    <div className="item">METASTREETS</div>
                    <div className="item">CONTACT</div>
                </div>
            </div>
        </>
    )
}

export default Home