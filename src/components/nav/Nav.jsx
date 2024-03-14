import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons'
import "./Nav.css"

export default function Nav(){
    return(
        <nav className='nav'>
            <div className="logo">
                <Link to = "/">
                    <img src ={process.env.PUBLIC_URL + "img/logo.svg"} alt="logo"/> 
                </Link>
            </div>
            <div className="conteyner-categories-list-user">
                <div className="categories">
                    <Link to = "/">Hot dishes</Link>
                    <Link to = "/">Fresh rolls</Link>
                    <Link to = "/">Salads</Link>
                    <Link to = "/">Sushi</Link>
                    <Link to = "/">Burgers</Link>
                    <Link to = "/">Desserts</Link>
                </div>
                <div class="cadegori-list">
                    <Link to = "/">
                        <FontAwesomeIcon icon={faList} className="fa-light fa-List" />
                    </Link>
                </div>
                <div className='user'>
                    <Link to = "/">
                        <FontAwesomeIcon icon={faUser} className="fa-light fa-user" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
