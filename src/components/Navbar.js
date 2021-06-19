import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/newlogo.png';

import { UserContext } from '../App';

const textStyle = {
    textAlign: 'center'
};

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);

    const Menu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="/">Home </NavLink>
                    </li>

                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="/about">Memories </NavLink>
                    </li>

                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="/contact">Contact </NavLink>
                    </li>

                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="signout">Logout </NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="/">Home </NavLink>
                    </li>

                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="/about">Memories </NavLink>
                    </li>

                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="/contact">Contact </NavLink>
                    </li>

                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="/signin">Signin </NavLink>
                    </li>

                    <li className="nav-item active" style={textStyle}>
                        <NavLink className="nav-link" to="signup">Register </NavLink>
                    </li>
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark " id="nav1">
                <NavLink className="nav-brand" to="/">
                    <img src={logo} alt="logo" />
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <Menu />
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar
