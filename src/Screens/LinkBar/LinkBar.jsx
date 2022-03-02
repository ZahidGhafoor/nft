import React from 'react'
import { NavLink } from 'react-router-dom'

import "./LinkBar.scss"

const LinkBar = (props) => {
    return (
        <>
            <div className="navbar">
                <NavLink onClick={props.homescroll} exact to="/" className="item">HOME</NavLink>
                <NavLink onClick={props.aboutscroll} to="/vison" className="item">VISION</NavLink>
                <NavLink onClick={props.faqscroll} to="/mission" className="item">MISSION</NavLink>
                <NavLink to="/store" className="item">METASTREETS</NavLink>
                <NavLink onClick={props.contactscroll} to="/contact" className="item">CONTACT</NavLink>
            </div>
        </>
    )
}

export default LinkBar