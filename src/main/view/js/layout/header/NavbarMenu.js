import React from 'react';
import {Link} from "react-router-dom";

const NavbarMenu = ({menuVisible}) => {
    return (
        <div id="navbarMenu" className={`navbar-menu ${menuVisible ? 'is-active' : ''}`}>
            <div className="navbar-start">
                <Link to='/decks' className="navbar-item has-text-grey">Decks</Link>
                <Link to='/license' className="navbar-item has-text-grey">License</Link>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="button is-primary">Create</div>
                </div>
            </div>
        </div>
    );
};

export default NavbarMenu;
