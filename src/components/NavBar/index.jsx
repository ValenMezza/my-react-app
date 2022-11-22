import { CartWidget } from "../CartWidget"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
            <div className="header-container">
                <nav className="navbar">
                    <div className="navbar__brand">
                        <a className="nav-marca" href="#a">Mateando.Online</a>
                    </div>
                    <div className="nav-div">
                        <ul className="nav-list">
                            <li className="nav__link"><a href=".">Termos</a></li>
                            <li className="nav__link"><a href=".">Mates</a></li>
                            <li className="nav__link"><a href=".">Combos</a></li>
                            <li className="nav__link"><a href="."><CartWidget></CartWidget></a></li>

                            
                        </ul>
                    </div>

                </nav>
            </div>
        </>
    )
} 