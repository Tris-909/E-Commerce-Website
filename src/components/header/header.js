import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOut } from '../../firebase/firebase';
import './header.scss';

function Header(props) {
    let signOutContent = props.currentUser ? (
        <Link className="option" to="/" onClick={signOut}>SIGN OUT</Link>
    ) : <Link className="option" to="/signIn" >SIGN IN</Link>;
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {signOutContent}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);