import React from 'react'
import "./Store.scss"

import icons from "../../Assets/opensea.svg"
import img1 from "../../Assets/1.webp"
import img2 from "../../Assets/2.webp"
import img3 from "../../Assets/3.webp"
import img4 from "../../Assets/4.webp"
import img5 from "../../Assets/5.webp"
import img6 from "../../Assets/6.webp"
import img7 from "../../Assets/7.webp"
import img8 from "../../Assets/8.webp"
import img9 from "../../Assets/9.webp"
import img10 from "../../Assets/10.webp"
import img11 from "../../Assets/11.webp"
import Navbar from '../Navbar/Navbar'
import { useHistory } from 'react-router-dom'
import LinkBar from '../LinkBar/LinkBar';



const arr = [
    {
        img: img1,
        score: 78.65,
        ranking: 8765
    },
    {
        img: img2,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img3,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img4,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img5,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img6,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img7,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img8,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img9,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img10,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img11,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img1,
        score: 78.65,
        ranking: 8765
    },
    {
        img: img2,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img3,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img4,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img5,
        score: 98.65,
        ranking: 4465
    },
    {
        img: img6,
        score: 98.65,
        ranking: 4465
    },
]

const Store = () => {
    let history = useHistory();

    function cardpush() {
        history.push("/nft-deatils");
    }

    return (
        <>
            <Navbar />

            <div className="store__container">
                <LinkBar />

                <div className="cards">
                    {arr.map((data, index) => {
                        return (
                            <div onClick={cardpush} className="card">
                                <img src={data.img} alt="" className="card__img" />
                                <div className="number">#{index + 1}</div>
                                <div className="score">Rarity score <span>{data.score}</span></div>
                                <div className="rank">Ranking <span>{data.ranking}</span></div>
                                <img src={icons} alt="" className="opensea" />
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Store