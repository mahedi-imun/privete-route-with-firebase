import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <nav className='nav-container'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">login</NavLink>
        </nav>
    );
};

export default Nav;