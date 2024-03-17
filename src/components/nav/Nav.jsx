import Logo from "../logo/Logo";
import Categories from '../categories/Categories';
import PyramidMenu from "../categories/pyramidMenu/PyramidMenu";
import User from "../user/User";
import "./Nav.css"

export default function Nav(){
    
    return(
        <nav className='nav'>
            <div className='container'>
                <PyramidMenu className='pramidMenu'/>
                <Logo/>
            </div>
            <div className="conteyner-categories-list-user">
                <Categories/>
                <User/> 
            </div>         
        </nav>
    )
}
