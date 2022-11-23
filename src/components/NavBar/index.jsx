import { CartWidget } from "../CartWidget"
import { NavLink } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
            <div className="header-container">
                <nav className="navbar">
                    <div className="navbar__brand">
                        <NavLink className="nav-marca" to='/'>Mateando.Online</NavLink>
                    </div>
                    <div className="nav-div">
                        <ul className="nav-list">
                            <li className="nav__link"><NavLink to='/categoria/Termos'>Termos</NavLink></li>
                            <li className="nav__link"><NavLink to='/categoria/Mates'>Mates</NavLink></li>
                            <li className="nav__link"><NavLink to='/categoria/Combos'>Combos</NavLink></li>
                            <li className="nav__link"><NavLink to='/Cart'><CartWidget></CartWidget></NavLink></li>

                            
                        </ul>
                    </div>

                </nav>
            </div>
        </>
    )
} 