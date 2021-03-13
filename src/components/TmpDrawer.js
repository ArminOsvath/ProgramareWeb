import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core" 
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"

import docImg from "../img/docLogo.png"
import driveImg from "../img/driveLogo.png"
import excelImg from "../img/excelLogo.png"
import formImg from "../img/formLogo.png"
import slidesImg from "../img/slidesLogo.png"
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"

import "./Drawer.css"

const useStyles = makeStyles({
    listItem: {
        marginLeft: "08px", fontSize: "14px", fontWeight: "500", color: "grey"
    },
    slideImages: {
        height: "20px", width: "20px"
    }
});


function TmpDrawer() {
    const classes = useStyles();
    /* used to open or clsoe the button*/
    const [state, setState] = React.useState({
        left: false
    })
    const toggleDrawer = (anchor, open) => (event) =>{
        setState({...state, [anchor]: open});
    };
    const list =(anchor) =>(
        <div style={{width: "250px"}} role = "presentation">
            <Divider />
            {/* the name */}
            <List>
                <ListItem>
                    <ListItemText style ={{fontSize: "48px", marginLeft: "5px"}}>
                        <span style = {{color: "blue", fontWeight:"700", fontSize: "22px", fontFamily: "'Product Sans', Arial, sans-sherif"}}>A</span> 
                        <span style = {{color: "red", fontWeight:"500", fontSize: "22px", fontFamily: "'Product Sans', Arial, sans-sherif"}}>r</span> 
                        <span style = {{color: "#dddd11", fontWeight:"500", fontSize: "22px", fontFamily: "'Product Sans', Arial, sans-sherif"}}>m</span> 
                        <span style = {{color: "blue", fontWeight:"500", fontSize: "22px", fontFamily: "'Product Sans', Arial, sans-sherif"}}>i</span> 
                        <span style = {{color: "green", fontWeight:"500", fontSize: "22px", fontFamily: "'Product Sans', Arial, sans-sherif"}}>n</span> 
                        <span style = {{color: "red", fontWeight:"500", fontSize: "22px", fontFamily: "'Product Sans', Arial, sans-sherif"}}>'</span> 
                        <span style = {{color: "blue", fontWeight:"500", fontSize: "22px", marginRight: "10px", fontFamily: "'Product Sans', Arial, sans-sherif"}}>s</span> 
                        <span style = {{color: "#5f6368", fontWeight:"500", fontSize: "22px", fontFamily: "'Product Sans', Arial, sans-sherif"}}>Forms</span> 
                    </ListItemText>
                </ListItem>
            </List>
        <Divider />
        {/* doc drive excel */}
        <List style = {{marginLeft: "8px", marginRight: "8px", marginTop:"15px"}}> 
            <ListItem className = "list_item">
                <img src = {docImg} className = {classes.slideImages}/>
                <div className = {classes.listItem}> Docs </div>
            </ListItem>

            <ListItem className = "list_item">
                <img src = {excelImg} className = {classes.slideImages}/>
                <div className = {classes.listItem}> Excel </div>
            </ListItem>

            <ListItem className = "list_item">
                <img src = {slidesImg} className = {classes.slideImages}/>
                <div className = {classes.listItem}> Slides </div>
            </ListItem>

            <ListItem className = "list_item">
                <img src = {formImg} className = {classes.slideImages}/>
                <div className = {classes.listItem}> Forms </div>
            </ListItem>
        </List>
        <Divider />
        {/*settings n help */}
        <List style = {{marginLeft: "8px", marginRight: "8px", marginTop: "15px"}}>
            <ListItem className = "list_item">
                <FiSettings />
                <div style = {{marginLeft: "20px", fontSize: "14px", fontWeight:"500", color:"grey"}}> Settings </div>
            </ListItem>
            <ListItem className = "list_item">
                <BsQuestionCircle />
                <div style = {{marginLeft: "20px", fontSize: "14px", fontWeight:"500", color:"grey"}}> Help & Feedback </div>
            </ListItem>
        </List>

        {/* driver */}
        <Divider />
        <List style = {{marginLeft: "8px", marginRight: "8px", marginTop: "15px"}}>
            <ListItem className = "list_item">
                <img src ={driveImg} className = {classes.slideImages}/>
                <div className = {classes.listItem}> Drive </div>
            </ListItem>
        </List>
        </div>
    )
    return (
        <div>
            <React.Fragment>
                <IconButton onClick = {toggleDrawer("left", true)}>        
                        <MenuIcon />    {/*menu button */}
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor = {'left'}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    )
}

export default TmpDrawer
