import {Link} from "react-router-dom"
import {UserIcon} from "../icons/Icons"
import "./User.css"

export default function User(){
    return(
        <div className='user'>
            <Link to = "/signIn">
                <UserIcon/>
            </Link>
        </div> 
    )  
}
