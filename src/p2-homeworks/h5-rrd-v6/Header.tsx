import { NavLink } from 'react-router-dom'
import s from "./Header.module.css";
import {PATH} from './Pages';


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
            <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} >junior+</NavLink>
            {/*<NavLink to={PATH.JUNIOR_PLUS}
             className={s.link}
             activeClassName={s.active}>junior+</NavLink>*/}
        </div>
    );
};





