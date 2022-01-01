import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <section className='navbar_container'>
            <Link style={{textDecoration:'none'}} to="/" > <li>Home </li></Link>
            <Link style={{textDecoration:'none'}} to="/parent"><li> Parent </li></Link>
            <Link style={{textDecoration:'none'}}to="/student"><li>Student </li></Link>
            <Link style={{textDecoration:'none'}}to="/teacher"><li> Teacher </li></Link>
        </section>
    )
}

export default NavBar;