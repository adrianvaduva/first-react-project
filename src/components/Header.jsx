import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Admin panel - First Project</Link>
        </nav>
    );
}

export default Header
