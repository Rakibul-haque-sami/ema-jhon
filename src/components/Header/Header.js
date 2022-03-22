
import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Info</a>
                <a href="/inventory">Manage Inventory</a>
                <div className='input-feild'>
                    <input className='input' type="text" placeholder='search here' />
                </div>
            </nav>
        </div>
    );
};

export default Header;