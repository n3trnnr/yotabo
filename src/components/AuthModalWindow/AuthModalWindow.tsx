import React, { useState } from 'react';
import styles from './AuthModalWindow.module.scss'
import SvgIcons from '../UI/Svg/SvgIcons';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

interface IAuthModalWindow {
    type: 'signup' | 'signin'
}

const AuthModalWindow: React.FC<IAuthModalWindow> = ({ type }) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const signUp = {
        login: login,
        password: password,
        email: email
    }

    const signIn = {
        login: login,
        password: password
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={styles["modal-window-container"]}>
            {
                type === 'signup' ?
                    <>
                        <form className={styles["form-wrapper"]}>
                            <div className={styles.title}>Sign Up</div>
                            <input className={styles["input-auth"]} type="text" name="login" placeholder='Login' required />
                            <input className={styles["input-auth"]} type="password" name="password" placeholder='Password' required />
                            <input className={styles["input-auth"]} type="email" name="email" placeholder='Email' required />
                            <button className={styles["button-submit"]}>Sign Up</button>
                        </form>
                        <Button styleName={styles["cross-close"]} buttonShape={"none"} colorStyle={"none"}>
                            <SvgIcons iconName={"cross"} />
                        </Button>
                        <div className={styles["redirect-wrapper"]}>
                            <span>
                                Already have an account?
                                <Link className={styles["redirect-link"]} to={"/signin"}> Sign In</Link>
                            </span>
                        </div>
                    </> :
                    <>
                        <form className={styles["form-wrapper"]}>
                            <div className={styles.title}>Sign In</div>
                            <input className={styles["input-auth"]} type="text" name="login" placeholder='Login' required />
                            <input className={styles["input-auth"]} type="password" name="password" placeholder='Password' required />
                            {/* <input className={styles["input-auth"]} type="email" name="email" placeholder='Email' required /> */}
                            <button className={styles["button-submit"]}>Sign In</button>
                        </form>
                        <Button styleName={styles["cross-close"]} buttonShape={"none"} colorStyle={"none"}>
                            <SvgIcons iconName={"cross"} />
                        </Button>
                        <div className={styles["redirect-wrapper"]}>
                            <span>
                                Don’t have an account?
                                <Link className={styles["redirect-link"]} to={"/signup"}> Create new one</Link>
                            </span>
                        </div>
                    </>
            }
        </div>
    );
}

export default AuthModalWindow;