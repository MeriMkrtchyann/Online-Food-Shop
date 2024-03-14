import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import "./Nav.css"

export default function Nav(){
    return(
        <nav>
            <div className="logo">
                <img src ={process.env.PUBLIC_URL + "img/logo.svg"} alt="logo"/>
            </div>
            <div className="categories">
                <ul>
                    <li>Hot dishes</li>
                    <li>Fresh rolls</li>
                    <li>Salads</li>
                    <li>Sushi</li>
                    <li>Burgers</li>
                    <li>Desserts</li>
                </ul>
            </div>
            <div className='user'>
                <FontAwesomeIcon icon={faUser} className="fa-light fa-user" />
            </div>
        </nav>
    )
}
