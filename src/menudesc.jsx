import { Outlet} from "react-router-dom";
import { NavLink } from 'react-router-dom';
const MenuDesc = () => {
    return (
        <div className="">
            <ul className='lg:gap-8 gap-2 text-sm max-sm:text-[12px] text-gray-500 font-medium flex'>
                <li className='top-menu-item'>
                    <NavLink activeClassName="active" to="/" exact>HOME</NavLink>
                </li>
                <li className='top-menu-item'>
                    <NavLink activeClassName="active" to="/product" exact>PRODUCTS</NavLink>
                </li>
                <li className='top-menu-item'>
                    <NavLink activeClassName="active" to="/blog" exact>BLOG</NavLink>
                </li>
                <li className='top-menu-item'>
                    <NavLink activeClassName="active" to="/about" exact>ABOUT</NavLink>
                </li>
                <li className='top-menu-item'>
                    <NavLink activeClassName="active" to="/contact" exact>CONTACT</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default MenuDesc;
