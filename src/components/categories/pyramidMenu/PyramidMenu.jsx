import { useState } from "react"
import {PyramidMenuIcon} from "../../icons/Icons"
import PersistentDrawerLeft from "./persistentDrawer/PersistentDrawer"
import "./PyramidMenu.css"

export default function PyramidMenu(){

    return(
        <button className="pyramidButton" >
             <PersistentDrawerLeft/>
            <PyramidMenuIcon />
        </button>
    )  
}


