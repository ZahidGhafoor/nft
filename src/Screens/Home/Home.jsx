import React from 'react'
import "./Home.scss"

import NavBar from "../Navbar/Navbar"
import StarVideo from "../../Assets/stars.mp4"

// icons

import gif from "../../Assets/home.gif"

const Home = (props) => {
    return (
        <>
            <div ref={props.home}  className="home__container">
                <div className="vedio_box">
                <video autoPlay="true" loop playsInline muted data-wf-ignore="true" data-object-fit="cover" >
                        <source src={StarVideo} type="video/mp4" data-wf-ignore="true" />
                    </video>
                </div>
                <NavBar />
                <div className="body">
                    <div className="left">
                        <div className="first">START</div>
                        <div className="line2">
                            <div className="first">$IGN</div>
                            <div className="text">SPORTS</div>
                        </div>
                        {/* <div className="first">BRAND</div> */}

                        <div className="left__para">
                            STARSIGN is the future of networking business investing and entertainment
                        </div>

                        <div className="left__btn">Buy on OpenSea</div>
                    </div>

                    <div className="right">
                        <img src={gif} alt="" className="right__gif" />
                    </div>




                </div>

            </div>
        </>
    )
}

export default Home