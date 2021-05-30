import React from 'react';
import styles from './WriteMessage.module.css';

const WriteMessage = (props) => {
    let newMessageItem = React.createRef();

    let onAddMessage = () => {
        if (newMessageItem.current.value === '') return;
        props.takeMessageData();
        newMessageItem.current.value = '';
    };

    let onMessageChange = () => {
        let text = newMessageItem.current.value;
        props.changeInputMessageText(text);
    }

    return (
        <form className={styles.wrapper}>
            <input 
                type="text" 
                ref={newMessageItem}
                className={styles.write__message}
                placeholder="Message..."
                onChange={onMessageChange}
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Message..."}
            />
            <button className={styles.button} onClick={ onAddMessage } type="button">Send</button>
        </form>
    );
}

export default WriteMessage;