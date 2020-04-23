import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '@/css/components/header.scss'

const Header = () => {
    return (
        <nav className='navbar'>
            <div className="container">
                <div className="navbar-brand">
                    <Link className='navbar-item' to='/'>
                        <img className='project-logo' src={'/resources/images/logo.png'} alt='Cardset logo'/>
                        <span className='project-name has-text-primary'>cardset</span>
                    </Link>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbar-menu">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>
                <div id='navbar-menu' className="navbar-menu">
                    <div className="navbar-start">

                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="button is-medium is-info">Create</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header