import {Link} from "react-router-dom"
import { useState } from "react";
import "./Categories.css"

export default function Categories(){

    const [hotDishes , setHotDishes] = useState(false)
    const [sushies , setSushes] = useState(false)

    const hotDishesCategoryOpenAndClose = (hotDishes) => setHotDishes((value)=> !value)
    const sushiCategoryOpenAndClose = (sushies) => setSushes((value)=> !value)

    return(
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
    )  
}