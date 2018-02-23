import React,{ Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
    render(){
        return(
            <footer className="Footer">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Casino">Casino</Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                    <li>
                        { this.logInButton }
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;