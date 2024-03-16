import {PyramidMenuIcon} from "../icons/Icons"
import "./PyramidMenu.css"

export default function PyramidMenu(){

    const barev = () => {
        console.log("barev")
    }
    return(
        <button onClick={barev} className="pyramidButton">
            <PyramidMenuIcon />
        </button>
    )  
}
