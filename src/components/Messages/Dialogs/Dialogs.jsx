import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import WriteMessageContainer from './WriteMessage/WriteMessageContainer';

const Dialogs = (props) => {
    // mapping the BLL
    let dialogsDataWrapper = props.dialogsData.map((userData) => {
        return <DialogItem message={userData.message} avatar={userData.avatar}/>
    });

    return (
        <div className={styles.wrapper}>
            {dialogsDataWrapper}
            <WriteMessageContainer store={props.store} />
        </div>
    )
}

export default Dialogs;