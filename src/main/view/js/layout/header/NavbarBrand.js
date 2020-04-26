import React from 'react';
import {Link} from "react-router-dom";

const NavbarBrand = ({menuVisible, setMenuVisible}) => {
    return (
        <div className="navbar-brand">
            <Link className='navbar-item' to='/'>
                <img className='project-logo' src={'/resources/images/cardset-logo-grey.png'} alt='Cardset logo'/>
                <span className='project-name has-text-primary'>cardset</span>
            </Link>
            <div className="navbar-item">
                <a onClick={() => setMenuVisible(!menuVisible)} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarMenu">
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>
        </div>
    );
};

export default NavbarBrand;
