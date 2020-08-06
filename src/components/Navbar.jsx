import React from 'react';

const Navbar = ({ tatolCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Shopping Cart
                <span className="badge badge-pill badge-secondary m-2">{tatolCounters}</span>
            </a>
        </nav>
    );
}
export default Navbar;