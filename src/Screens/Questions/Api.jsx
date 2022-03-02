import React, { useState } from 'react'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const Api = ({data}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
  return (
    <>
         <div className="accordian1">
                            <div onClick={handleOpen} className="heading">
                                <div className="close">
                                    <div
                                        style={{ color:"white" }}
                                        className="text"
                                    >
                                        {data.question}
                                    </div>
                                    <div className="icon">
                                        {open ? (
                                            <RemoveCircleIcon style={{ color: "white" }} />
                                        ) : (
                                            <AddCircleIcon style={{ color: "white" }} />
                                        )}
                                    </div>
                                </div>
    
                                <div className={`data ${open ? "show" : null}`}>
                                    <div className="para1">
                                        {data.Answer}
    
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default Api