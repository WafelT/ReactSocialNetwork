import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import WritePostContainer from './WritePost/WritePostContainer';

const MyPosts = (props) => {

    let postDataWrapper = props.postData.map((postData) => {
        return <Post profile={props.profile} message={postData.message} date={postData.date}/>
    });

    return(
        <div className={styles.wrapper}>
            <WritePostContainer store={props.store} />
            <div className={styles.posts__wrapper}>
                {postDataWrapper}
            </div>
        </div>
    );
}

export default MyPosts;