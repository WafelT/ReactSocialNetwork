import preloader from './preloader.svg';
import styles from './Preloader.module.css';

let Preloader = () => {
    return (
        <img className={styles.image} src={preloader} />
    );
}

export default Preloader;