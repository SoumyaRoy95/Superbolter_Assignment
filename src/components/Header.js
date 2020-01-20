import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark custom-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler01" aria-controls="navbarToggler01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler01">

                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-title">
                            <li className="nav-item">
                                <Link  className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/next">Next</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
