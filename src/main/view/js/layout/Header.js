import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import '@/css/components/header.scss'
import NavbarBrand from "@/js/layout/header/NavbarBrand";
import NavbarMenu from "@/js/layout/header/NavbarMenu";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <nav className='navbar box'>
            <div className="container">
                <NavbarBrand setMenuVisible={setMenuVisible} menuVisible={menuVisible}/>
                <NavbarMenu menuVisible={menuVisible}/>
            </div>
        </nav>
    );
}

export default Header