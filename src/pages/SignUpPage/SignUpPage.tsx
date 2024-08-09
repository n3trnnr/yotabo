import React from 'react';
import styles from './SignUpPage.module.scss'
import AuthModalWindow from '../../components/AuthModalWindow/AuthModalWindow';
// import { useSelector } from 'react-redux';

const SignUpPage: React.FC = () => {
    // const user = useSelector((state: unknown) => state.userSlice)
    // console.log('user', user);

    return (
        <div className={styles["sign-up-container"]}>
            <AuthModalWindow type={"signup"} />
        </div>
    );
}

export default SignUpPage;