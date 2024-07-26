import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" activeClassName="active-link">
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservar" activeClassName="active-link">
                            Reservar
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
