import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import app from '../../firebase.init';
import './Nav.css'
const auth = getAuth(app);
const Nav = () => {
    
    const [user] = useAuthState(auth);
    return (
        <nav className='nav-container'>
            <NavLink to="/">Home</NavLink>
            <NavLink to='orders'>orders</NavLink>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid 
                ?
                <button onClick={()=>signOut(auth)}>log out</button>
                :
                <NavLink to="/login">login</NavLink>
            }
        </nav>
    );
};

export default Nav;