import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <form action="/" className={styles.form}>
                <h1 className={styles.loginNaming}>Login</h1>
                <input 
                    type="text" 
                    className={styles.input}
                    placeholder="Your email"
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "Your email"}
                    />

                <input 
                    type="password" 
                    className={styles.input}
                    placeholder="Your password"
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "Your password"}
                    />
                <button className={styles.btn}>Log In</button>
            </form>
        </div>
    );
};

export default Login;