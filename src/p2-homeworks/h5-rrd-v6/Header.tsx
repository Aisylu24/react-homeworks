import { NavLink } from 'react-router-dom'
import s from "./Header.module.css";



function Header() {

    return (
        <div className={s.links}>
            <Links/>
            <div className={s.showLinks}></div>

        </div>
    )
}

export default Header

const Links = () => {
    return (
        <div>
            <NavLink to={'/pre-junior'}>pre-junior</NavLink>
            <NavLink to={'/junior'}>junior</NavLink>
            <NavLink to={'/junior-plus'}>junior+</NavLink>
        </div>
    );
};





