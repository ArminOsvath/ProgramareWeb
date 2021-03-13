import React from 'react'
import StorageIcon from "@material-ui/icons/Storage"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import FolderOpenIcon from "@material-ui/icons/FolderOpen"
import { IconButton } from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import recent from "../img/recent.png"
import "./Mainbody.css"
function Mainbody() {
    return (
        <div className = "mainbody">
            <div className = "mainbody_top">
                <div className = "mainbody_top_left" style = {{fontSize: "16px", fontWeight: "500"}}>
                Recent Forms
                </div>
                <div className = "mainbody_top_right">
                    <div className = "mainbody_top_center" style = {{fontSize: "14px", marginRight: "125px"}}>Owned by Anyone <ArrowDropDownIcon /></div>
                    <IconButton>
                        <StorageIcon style = {{fontSize: "16px", color: "black"}}/>
                    </IconButton>
                    <IconButton>
                        <StorageIcon style = {{fontSize: "16px", color: "black"}}/>
                    </IconButton>
                    
                </div>
            </div>
            <div className = "mainbody_docs">
                <div className = "doc_card">
                    <img src = {recent} className = "doc_image" />
                    <div className = "doc_Card_content">
                        <h5></h5>
                        <div className = "doc_content" style = {{fontSize: "12px", color: "grey"}}>
                            <div className = "content_left">
                                <StorageIcon style = {{color: "white", fontSize: "12px", backgroundColor: "#6E2594", padding: "3px", marginRight: "3px", borderRadius: "2px"}} /> Opened 1 hr ago
                            </div>
                            <MoreVertIcon style = {{fontSize: "16px", color: "grey"}}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Mainbody