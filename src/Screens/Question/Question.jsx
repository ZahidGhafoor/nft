import React, { useState } from 'react'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "./Question.scss";

const Question = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const handleOpen3 = () => {
    setOpen3(!open3);
  };
  const handleOpen4 = () => {
    setOpen4(!open4);
  };
  const handleOpen5 = () => {
    setOpen5(!open5);
  };

    return (

        <>
            <div id="faq" className="question__container">
                <div className="left">
                    <div className="left__heading">QUESTIONS?</div>
                    <div className="para">WE HAVE THE ANSWERS</div>
                    <div className="para2">Our reach us on social media:</div>

                    <div className="accordian1">
                        <div onClick={handleOpen} className="heading">
                            <div className="close">
                                <div
                                    style={{ color: open ? "#f831ec" : "white" }}
                                    className="text"
                                >
                                    WHAT ARE MOONING MONKEYS?
                                </div>
                                <div className="icon">
                                    {open ? (
                                        <RemoveCircleIcon style={{ color: "#631de7" }} />
                                    ) : (
                                        <AddCircleIcon style={{ color: "#631de7" }} />
                                    )}
                                </div>
                            </div>

                            <div className={`data ${open ? "show" : null}`}>
                                <div className="para1">
                                    <span>The Mooning Monkeys</span> are 12,000 exclusive
                                    characters that <span>ALL </span>
                                    have <span>UNIQUE</span> characteristics.
                                </div>
                                <div className="para2">
                                    <span>The Mooning Monkeys NFT Game</span> is a celebration for
                                    gaming, one that encourages gamers to join the{" "}
                                    <span>NFT</span> community and make friends, connections, and
                                    relationships with like-minded individuals all while
                                    potentially making money along the way.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Question;