import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons'
import "./Nav.css"

export default function Nav(){
    return(
        <nav className='nav'>
            <div className="logo">
                <img src ={process.env.PUBLIC_URL + "img/logo.svg"} alt="logo"/> 
            </div>
            <div className="conteyner-categories-list-user">
                <div className="categories">
                    <ul>
                        <li> <a href="#">Hot dishes</a></li>
                        <li> <a href="#">Fresh rolls</a></li>
                        <li> <a href="#">Salads</a></li>
                        <li> <a href="#">Sushi</a></li>
                        <li> <a href="#">Burgers</a></li>
                        <li> <a href="#">Desserts</a></li>
                    </ul>
                </div>
                <div class="cadegori-list">
                    <button>
                        <FontAwesomeIcon icon={faList} className="fa-light fa-List" />
                    </button>
                </div>
                <div className='user'>
                    <button>
                        <FontAwesomeIcon icon={faUser} className="fa-light fa-user" />
                    </button>
                </div>
            </div>

        </nav>
    )
}
