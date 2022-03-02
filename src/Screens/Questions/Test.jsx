import React, { useState } from 'react'
import "./test.scss";
import Api from './Api';

const arr = [
    {
        question: "How many Aliens will be available?",
        Answer: "9999 Aliens will be minted for the public, and that’s it. Maybe there’s one extra - a special crazy alien hidden somewhere in space.‍ Maybe he will open the doors of the metaverse for A$$ members very soon. Who knows...",
    },
    {
        question: "What blockchain will the Aliens be minted on?",
        Answer: "The Ethereum blockchain.",
    },
    {
        question: "Will there be a pre-sale?",
        Answer: "Yes, there will be a pre-sale for whitelisted members. This will take place on November 30, 2021 for 0.1 eth (Max 2 per whitelisted member).",
    },
    {
        question: "Will there be a pre-sale?",
        Answer: "Yes, there will be a pre-sale for whitelisted members. This will take place on November 30, 2021 for 0.1 eth (Max 2 per whitelisted member).",
    },
    {
        question: "When will the public sale go live?",
        Answer: "The public sale will take place on December 1, 2021.",
    },
    {
        question: "How will the public sale work?",
        Answer: "The public sale will use the dutch auction system.The price starts at 0.25 ETH, and drops every 6 hours, by 0.05  ETH.The price will end at 0.15 ETH, where it will stay until the mint is sold out.",
    },
    {
        question: "Where can I view my NFT?",
        Answer: "Once minted, you'll just need to login into your OpenSea account to view your NFTs.",
    },
    {
        question: "How can I mint my alien?",
        Answer: "You will need a Metamask wallet or a Wallet Connect compatible wallet.",
    },
]

const Test = () => {





    return (
        <>
            <div id="faq" className="question__container">
                <div className="left__heading">FAQ</div>

                <div className="accordian">
                    {
                        arr.map((data, index) => {
                            return (
                                <Api data={data} />
                            )
                        })
                    }


                </div>

            </div>
        </>
    )
}

export default Test