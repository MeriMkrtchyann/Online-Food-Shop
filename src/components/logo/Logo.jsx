import {Link} from "react-router-dom"

export default function Logo(){
    return(
        <div className="logo">
            <Link to = "/">
                <img src ={process.env.PUBLIC_URL + "img/logo.svg"} alt="logo"/> 
            </Link>
        </div>
    )  
}
