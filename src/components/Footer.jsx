import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
            <Link to="/about" className="navbar-brand">About</Link>
        </nav>
    );
}

export default Footer
