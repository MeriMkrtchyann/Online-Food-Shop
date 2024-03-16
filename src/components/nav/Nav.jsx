import { useState } from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons'
import "./Nav.css"

export default function Nav(){

    const [hotDishes , setHotDishes] = useState(false)
    const [sushies , setSushes] = useState(false)

    const hotDishesCategoryOpenAndClose = (hotDishes) => setHotDishes((value)=> !value)
    const sushiCategoryOpenAndClose = (sushies) => setSushes((value)=> !value)
    
    return(
        <nav className='nav'>
            <div className="logo">
                <Link to = "/">
                    <img src ={process.env.PUBLIC_URL + "img/logo.svg"} alt="logo"/> 
                </Link>
            </div>
            <div className="conteyner-categories-list-user">
                <div className="categories">
                    <div className="hotdishes" onMouseOver={hotDishesCategoryOpenAndClose} onMouseOut={hotDishesCategoryOpenAndClose}>
                        <div>
                            <Link to = "/hotdishes">Hot dishes</Link>
                        </div>
                        {hotDishes && 
                            <div className="categoriHotDishes">
                                <div><Link to = "/categoriHotDishes">Soups</Link></div>
                                <div><Link to = "/categoriHotDishes">Seafood</Link></div>
                                <div><Link to = "/categoriHotDishes">With chicken</Link></div>
                                <div><Link to = "/categoriHotDishes">With veal</Link></div>
                            </div>
                        }
                    </div>
                    <div className="freshrolls">
                        <Link to = "/freshrolls">Fresh rolls</Link>
                    </div>
                    <div className="slads">
                        <Link to = "/slads">Salads</Link>
                    </div>
                    <div className="sushi" onMouseOver={sushiCategoryOpenAndClose} onMouseOut={sushiCategoryOpenAndClose}>
                        <div><Link to = "/sushi">Sushi</Link></div>
                        {sushies && 
                            <div className="categoriHotDishes">
                                <div><Link to = "/categoriSushi">Rolls</Link></div>
                                <div><Link to = "/categoriSushi">Maki</Link></div>
                                <div><Link to = "/categoriSushi">Hot Rolls</Link></div>
                                <div><Link to = "/categoriSushi">Sets</Link></div>
                            </div>
                        }
                    </div>
                    <div className="burgers">
                        <Link to = "/burgers">Burgers</Link>
                    </div>
                    <div className="desserts">
                        <Link to = "/desserts">Desserts</Link>
                    </div>
                </div>
                <div className="cadegori-list">
                    <Link to = "/">
                        <FontAwesomeIcon icon={faList} className="fa-light fa-List" />
                    </Link>
                </div>
                <div className='user'>
                    <Link to = "/login">
                        <FontAwesomeIcon icon={faUser} className="fa-light fa-user" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
