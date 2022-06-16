import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
const Menu=()=>{
    return (
        <Router>
            <ul className="navbarMenu">
                <li>
                    <Link to="/">NFTs</Link>
                </li>
                <li>
                    <Link to="/">ROADMAP</Link>
                </li>
                <li>
                    <Link to=''>WHITEPAPER</Link>
                </li>
                <li>
                    <Link to=''>ABOUT</Link>
                </li>
                <li>
                    <Link to=''>FREEBIES</Link>
                </li>
                <li>
                    <Link to=''>MARKETPLACES</Link>
                </li>
                <li>
                    <Link to=''>JOIN&nbsp;DISCORD</Link>
                </li>
                <li>
                    <Link to=''>Twitter</Link>
                </li>
                <li>
                    <Link to=''>Instagram</Link>
                </li>
                <li>
                    <Link to=''>Discord</Link>
                </li>
            </ul>
        </Router>
    )
}
export default Menu;