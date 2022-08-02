import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className='nav-items'>
                    <Link to={'/tweets'}>All Tweets</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/new_tweet'}>New Tweet</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='nav-items'>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        };
    }

    render() {
        return (
            <nav>
                <Link to="/"><h3 className='nav-title'>A Twitter Clone</h3></Link>
                { this.getLinks() }
            </nav>
        );
    }

};

export default NavBar;