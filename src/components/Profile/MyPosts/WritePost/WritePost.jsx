import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './WritePost.module.css';

const WritePost = (props) => {
    let addNewPost = (values) => {
        props.addPost(values.postInput);
    }

    return(
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Share your thoughts:</h1>
            <WritePostReduxForm onSubmit={addNewPost} />
        </div>
    ); 
}

const AddPostForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <Field
                component={"textarea"} 
                name={"postInput"}
                className={styles.textarea}
                placeholder="your post..."
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "your post..."}
            />
            <button className={styles.button}>Post</button>
        </form>
    ); 
}

const WritePostReduxForm = reduxForm({ form : 'postAddPostForm' })(AddPostForm);

export default WritePost;