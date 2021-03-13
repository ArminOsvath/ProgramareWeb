import React from 'react'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { IconButton } from "@material-ui/core"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import "./Template.css"

import plus from "../img/plus.png"
import party from "../img/party.png"
import contact from "../img/contact.png"

function Template() {
    return (
        <div className = "template_section">
            <div className = "template_top">
                <div className = "template_left">
                    <span style = {{fontSize: "16px", color: "#202124"}}>Start new Form</span>
                </div>
                <div className = "template_right">
                    <div className = "gallery_button">
                        Template Gallery
                        <UnfoldMoreIcon fontSize = "small"/>
                    </div>
                    <IconButton>
                        <MoreVertIcon fontSize = "small"/>
                    </IconButton>
                </div>
            </div>
            <div className = "template_body">
                <div className = "card">
                    <img src = {plus} alt = "no image" className = "card_img"/>
                    <p className= "card_title">Blank new form</p>
                </div>
                <div className = "card">
                    <img src = {party} alt = "no image" className = "card_img"/>
                    <p className= "card_title">Party Invite</p>
                </div>
                <div className = "card">
                    <img src = {contact} alt = "no image" className = "card_img"/>
                    <p className= "card_title">Contact Information</p>
                </div>
            </div>
            
        </div>
    )
}

export default Template
