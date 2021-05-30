import React from 'react';
import Preloader from '../../commons/Preloader/Preloader';
import styles from './AboutUser.module.css';
import defaultUserAvatar from '../../../assets/images/defaultUserAvatar.png';

const AboutUser = (props) => {
    
    if (props.profile === null) {
        return <Preloader />
    }

    return(
        <div className={styles.wrapper}>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultUserAvatar} className={styles.image} alt=""/>
            <div className={styles.information}>
                <h1 className={styles.user__name}>{props.profile.fullName}</h1>
                <p className={styles.item}><span className={styles.item_attribute}>Have work: </span>{props.profile.lookingForAJob === true ? 'No' : 'Yes'}</p>
                <p className={styles.item}><span className={styles.item_attribute}>About me: </span>{props.profile.aboutMe}</p>
                <p className={styles.item}><span className={styles.item_attribute}>Github: </span>{props.profile.contacts.github}</p>
            </div>
        </div>
    );
}

export default AboutUser;