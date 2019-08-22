import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect' 
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ currentUser }) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo classname='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser
                        ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/sign-in-sign-up'>
                            SIGN IN
                        </Link>
                }
            <CartIcon/>
            </div>
        </div>
    );
} 

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);