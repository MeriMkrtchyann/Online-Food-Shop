import Logo from "../logo/Logo";
import Categories from '../categories/Categories';
import PyramidMenu from "../categories/PyramidMenu";
import User from "../user/User";
import "./Nav.css"

export default function Nav(){
    
    return(
        <nav className='nav'>
            <Logo/>
            <div className="conteyner-categories-list-user">
                <Categories/>
                <PyramidMenu/>
                <User/> 
            </div>         
        </nav>
    )
}
