import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './WriteMessage.module.css';

const WriteMessage = (props) => {
    let addNewMessage = (values) => {
        props.takeMessageData(values.messageInput);
    }

    return (
        <WriteMessageReduxForm onSubmit={addNewMessage} />
    );
}


const AddMessageForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit} className={styles.wrapper}>
        <Field
            component={"textarea"} 
            name="messageInput"
            type="text" 
            className={styles.write__message}
            placeholder="Message..."
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Message..."}
            />
        <button className={styles.button}>Send</button>
    </form>
    );
}

const WriteMessageReduxForm = reduxForm({ form : 'dialogAddMessageForm' })(AddMessageForm);

export default WriteMessage;