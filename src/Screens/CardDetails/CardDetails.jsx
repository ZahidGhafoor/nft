import React from 'react'
import "./CardDetails.scss"

import IosShareIcon from '@mui/icons-material/IosShare';
import sea from "../../Assets/open.svg"
import img1 from "../../Assets/1.webp"
import img2 from "../../Assets/2.webp"
import img3 from "../../Assets/3.webp"
import img4 from "../../Assets/4.webp"
import img5 from "../../Assets/5.webp"


import BoltIcon from '@mui/icons-material/Bolt';
import DiamondIcon from '@mui/icons-material/Diamond';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const arr = [
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    {
        title: "EYES",
        condition: "SURPRISED",
        percent: 21.74,
        rair: 1256,
    },
    
]
const CardDetails = () => {
    return (
        <div className="cd__container">
            <div className="cd__header">
                <div className="left">
                    <div className="first">
                        &gt; Back to the collection
                    </div>
                    <div className="second"> <i>#</i>2</div>
                    <div className="third">
                        <div className="text"> Owned by <span>Null</span></div>
                        <div className="go__icons">
                            <IosShareIcon className='link' />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="btn">
                        <div className="text">View on Opensea</div>
                        <img src={sea} alt="" className="btn__icons" />
                    </div>
                </div>
            </div>
            <div className="card__body">
                <div className="left">
                    <div className="upper">
                        <img src={img1} alt="" className="upper__img" />
                    </div>
                    <div className="bottom">
                        <img src={img2} alt="" className="bottom__img" />
                        <img src={img3} alt="" className="bottom__img" />
                        <img src={img4} alt="" className="bottom__img" />
                        <img src={img5} alt="" className="bottom__img" />
                    </div>
                </div>
                <div className="right">
                    <div className="utilities">
                        <div className="heading">
                            <BoltIcon className='heading__icon' />
                            <div className="text">Utilities</div>
                        </div>
                        <div className="body">
                            <ul>
                                <li className="body__list">Royalties on Sandaga NFT Marketplace and the MM collection</li>
                                <li className="body__list">Every holders will be able to claim some $DAGA token
                                </li>
                                <li className="body__list">Exclusive whitelists for DAGAlabs collections
                                </li>
                                <li className="body__list">Your own space in our Galaxy of Nilmara's Map
                                </li>
                                <li className="body__list">Holders will help us build Sandaga, our NFT Marketplace
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="attributes">
                    <div className="heading">
                            <DiamondIcon className='heading__icon' />
                            <div className="text">Attributes</div>
                        </div>
                        <div className="body">
                           {
                               arr.map((data)=>{
                                   return(
                                    <div className="card">
                                    <div className="title">{data.title}</div>
                                    <div className="main">{data.condition}</div>
                                    <div className="rair"><span>Rarity {data.percent}% </span>({data.rair})</div>
                                </div>
                                   )
                               })
                           }
                        </div>
                    </div>
                    <div className="details">
                    <div className="heading">
                            <FileCopyIcon className='heading__icon' />
                            <div className="text">Details</div>
                        </div>
                        <div className="body">
                           <div className="first">
                               <div className="left">Contact Address</div>
                               <div className="right"><span>Null</span></div>
                           </div>
                           <div className="first">
                               <div className="left">Token ID</div>
                               <div className="right">10</div>
                           </div>
                           <div className="first">
                               <div className="left">Token standard</div>
                               <div className="right">ERC-721</div>
                           </div>
                           <div className="first">
                               <div className="left">Blockchain</div>
                               <div className="right">Null</div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails