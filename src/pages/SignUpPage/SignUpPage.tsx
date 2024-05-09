import React from 'react';
import styles from './SignUpPage.module.scss'
import AuthModalWindow from '../../components/AuthModalWindow/AuthModalWindow';

const SignUpPage: React.FC = () => {
    return (
        <div className={styles["sign-up-container"]}>
            <AuthModalWindow type={"signup"} />
        </div>
    );
}

export default SignUpPage;