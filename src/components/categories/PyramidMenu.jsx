import {Link} from "react-router-dom"
import {PyramidMenuIcon} from "../icons/Icons"
import "./PyramidMenu.css"

export default function PyramidMenu(){
    return(
        <Link to = "/">
            <PyramidMenuIcon/>
        </Link>
    )  
}
