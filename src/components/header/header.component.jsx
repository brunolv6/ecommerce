import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'
/* import { auth } from 'firebase'; */

const Header = props => {
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
                    props.currentUser
                        ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/sign-in-sign-up'>
                            SIGN IN
                        </Link>
                }
            </div>
        </div>
    );
} 

export default Header;