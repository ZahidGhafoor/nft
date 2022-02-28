import React from 'react'
import "./Home.scss"

// icons

import gif from "../../Assets/home.gif"

const Home = () => {
    return (
        <>
            <div className="home__container">
                <div className="body">
                    <div className="left">
                        <div className="first">START</div>
                        <div  className="line2">
                            <div className="first">$IGN</div>
                            <div className="text">SPORTS</div>
                        </div>
                        <div className="first">BRAND</div>

                        <div className="left__para">
                            STARSIGN is the future of networking business investing and entertainment
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