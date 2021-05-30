import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserDialogs.module.css';

const UserDialogsName = (props) => {
    return(
        <NavLink to={"/messages/" + props.id}>
            <div className={styles.user}>
                <img className={styles.user__avatar} src={props.userAvatar} alt=""/>
                <h2 className={styles.user__name}>{props.userName}</h2>
            </div>
        </NavLink>
    );
}

const UserDialogs = (props) => {

    // mapping the BLL
    let usersDataWrapper = props.usersData.map((userData) => {
        return <UserDialogsName id={userData.id} userName={userData.name} userAvatar={userData.avatar}/> 
    });
    
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.dialogs}>Dialogs</h1>
            <div className={styles.users__name}>
                {usersDataWrapper}
            </div>
        </div>
    );
}

export default UserDialogs;