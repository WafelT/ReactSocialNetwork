import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderUserData.module.css'

const HeaderUserData = (props) => {
    return (
        <div className={styles.wrapper}>
            {
                props.login ?
                <div className={styles.authorizedUser}>
                    <span className={styles.userLogin}>{props.login}</span>
                    <span className={styles.currentState}>online</span>
                </div> :
                <NavLink to='/login' className={styles.login}>
                    <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.13514 0H17.2432C18.0747 0 18.8722 0.330308 19.4601 0.91826C20.0481 1.50621 20.3784 2.30365 20.3784 3.13514V6.27027H17.2432V3.13514H3.13514V28.2162H17.2432V25.0811H20.3784V28.2162C20.3784 29.0477 20.0481 29.8451 19.4601 30.4331C18.8722 31.021 18.0747 31.3514 17.2432 31.3514H3.13514C2.30365 31.3514 1.50621 31.021 0.91826 30.4331C0.330308 29.8451 0 29.0477 0 28.2162V3.13514C0 2.30365 0.330308 1.50621 0.91826 0.91826C1.50621 0.330308 2.30365 0 3.13514 0V0Z" fill="white"/>
                        <path d="M18.9519 21.3032L21.1622 23.5135L29.0001 15.6757L21.1622 7.83783L18.9519 10.0481L22.9963 14.1081H7.83789V17.2432H22.9963L18.9519 21.3032Z" fill="white"/>
                    </svg>
                    Login
                </NavLink>
            }
        </div>
    );
}

export default HeaderUserData;