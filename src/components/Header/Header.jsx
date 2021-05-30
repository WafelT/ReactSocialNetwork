import React from 'react';
import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderUserDataContainer from './HeaderUserData/HeaderUserDataContainer';


const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderUserDataContainer />
        </header>
    );
}

export default Header;