import React from 'react';
import Preloader from '../../../commons/Preloader/Preloader';
import styles from './Post.module.css';
import defaultUserAvatar from '../../../../assets/images/defaultUserAvatar.png';

const Post = (props) => {

    if (props.profile === null) {
        return <Preloader />
    }

    return(
        <div className={styles.post}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={props.profile.photos.small != null ? props.profile.photos.small : defaultUserAvatar} alt="ava"/>
                <div className={styles.information}>
                    <h1 className={styles.user}>{props.profile.fullName}</h1>
                    <time className={styles.date}>{props.date}</time>
                </div>
            </div>
            <div className={styles.post__message}>
                {props.message}
            </div>
        </div>
    );
}

export default Post;