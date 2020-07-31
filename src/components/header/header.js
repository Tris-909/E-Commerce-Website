import React from 'react'

//** PACKAGES */
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from '../../firebase/firebase';

//** COMPONENTS */
import CartIcon from '../cart-icon/CartIcon';
import CardDropdown from '../cart/CartDropdown';

//** REDUX */
import {connect} from 'react-redux';
import { settUser } from '../../redux/actions/user/userSelector';
import { getIsOpenStatus } from '../../redux/actions/cart/cartSelector';

//** ASSETS */
import { ReactComponent as Logo } from '../../assets/crown.svg';

//** CSS */
const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

const Options = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Option = styled(Link)`
    font-size: 2em;
    padding: 10px 15px;
    cursor: pointer;
`;

//** COMPONENTS */

function Header(props) {
    let signOutContent = props.currentUser ? (
        <Option to="/" onClick={signOut}>SIGN OUT</Option>
    ) : <Option to="/signIn" >SIGN IN</Option>;
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <Options>
                <Option to="/shop">SHOP</Option>
                <Option to="/contact">CONTACT</Option>
                {signOutContent}
                <CartIcon /> 
            </Options>
            {props.isOpen ? <CardDropdown /> : null }
        </HeaderContainer>
    )
}

const mapStateToProps = (state) => ({
    currentUser: settUser(state),
    isOpen: getIsOpenStatus(state)
});

export default connect(mapStateToProps)(Header);