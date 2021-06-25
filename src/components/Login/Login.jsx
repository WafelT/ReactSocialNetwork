import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <Field 
                name={"login"}
                type="text" 
                className={styles.input}
                placeholder="Your email"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Your email"}
                component={"input"}
                />

            <Field
                name={"password"}
                type="password" 
                className={styles.input}
                placeholder="Your password"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Your password"}
                component={"input"}
                />
            <Field 
                name={"remember"}
                component={"input"} 
                type={"checkbox"} 
                /> remember me
            <button className={styles.btn}>Log In</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form : 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.loginNaming}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;