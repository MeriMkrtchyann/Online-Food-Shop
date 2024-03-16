import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import "./User.css"

export default function User(){
    return(
        <div className='user'>
            <Link to = "/signIn">
                <FontAwesomeIcon icon={faUser} className="fa-light fa-user" />
            </Link>
        </div> 
    )  
}
