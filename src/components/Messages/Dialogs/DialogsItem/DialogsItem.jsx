import React from 'react';
import styles from './DialogsItem.module.css';

const DialogItem = (props) => {
    return(
        <div className={styles.item}>
            <img className={styles.user__image} src={props.avatar} alt="image__avatar"/>
            <p className={styles.message}>
                {props.message}
            </p>
        </div>
    )
}

export default DialogItem;