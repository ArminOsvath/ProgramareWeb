import React from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core" 
import formimage from "../img/formLogo.png"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import avatarimage from "../img/Sloth.jpg"
import TmpDrawer from "./TmpDrawer"

function Header() {
    return (
        <div className = "header">
            <div className = "header_info">
                <TmpDrawer />
                <img src={formimage} style = {{height: '40px', width: "40px"}} className = "form_image" /> {/*logo image */}
                <div className = "info">
                    Armin's Forms
                </div>
            </div>
            <div className = "header_search">
                <IconButton><SearchIcon/></IconButton> {/*search icon and text */}
                <input type = "text" name = "search" placeholder = "Search here"></input> 
            </div>
            <div className = "header_right">
                <IconButton>
                    <AppsIcon /> {/*more apps button from google */}
                </IconButton>
                <IconButton>
                    <Avatar src = {avatarimage} /> {/*avatar picture */}
                </IconButton>
            </div>
        </div>
    )
}

export default Header;