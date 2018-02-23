import React,{ Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    logInButton(){
        return(
            <button className="Button"> Log in </button>
        )
    }
    render(){
        return(
            <header className="Header">
                <nav className="MainMenu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Casino">Casino</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="AccountMenu">
                    <ul>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                        <li>
                            { this.logInButton() }
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;