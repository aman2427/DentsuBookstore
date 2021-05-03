import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import logo from 'bookstore\src\components\logo.png'

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                <img 
                    src="logo.png"
                    width="109"
                    height="40"
                    className="d-inline-block align-top"
                    alt="BookStore"
                />
                </Link>
                <Link to="/" className="navbar-brand">
                <img 
                    src="cart.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="BookStore"
                />
                </Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Books</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}