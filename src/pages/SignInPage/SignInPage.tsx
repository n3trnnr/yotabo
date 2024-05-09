import React from 'react';
import styles from './SignInPage.module.scss'
import AuthModalWindow from '../../components/AuthModalWindow/AuthModalWindow';

const SignInPage = () => {
    return (
        <div className={styles["sign-in-container"]}>
            <AuthModalWindow type={"signin"} />
        </div>
    );
}

export default SignInPage;