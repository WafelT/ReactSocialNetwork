import React from 'react';
import styles from './Messages.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import UserDialogsContainer from './UsersDialogs/UsersDialogsContainer';


const Messages = () => {

    return(
        <div className={styles.messages}>
            <UserDialogsContainer />
            <DialogsContainer />
        </div>
    );
}

export default Messages;