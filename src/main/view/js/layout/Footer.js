import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='content has-text-centered'>
                <p>
                    <strong>Cardset</strong> by sthfaceless.
                    The source code is licensed <Link to='/license'>MIT</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
