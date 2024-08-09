

const SignUp = () => {
    return (
        <>
            {/* <form
                onSubmit={handleSubmit(submit)}
                className={styles["form-wrapper"]}
            >
                <div className={styles.title}>Sign Up</div>
                <label className={styles.label}>
                    <input
                        {...register('username', { required: true, pattern: /^[A-Za-z](.+[A-Za-z-_\d])/i })}
                        className={styles["input-auth"]} type="text" placeholder='Login'
                    />
                    {errors.username && <div className={styles['error-message']}>incorrect login</div>}
                </label>
                <label className={styles.label}>
                    <input
                        {...register('password', { required: true, pattern: /^[A-Za-z](.+[A-Za-z!\d])/i })}
                        className={styles["input-auth"]} type="password" placeholder='Password'
                    />
                    {errors.password && <div className={styles['error-message']}>incorrect password</div>}
                </label>
                <label className={styles.label}>
                    <input
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className={styles["input-auth"]} type="email" placeholder='Email'
                    />
                    {errors.email && <div className={styles['error-message']}>incorrect email</div>}
                </label>
                <button
                    disabled={!isValid}
                    className={isValid ? styles["button-submit"] : `${styles['button-submit-disabled']} ${styles['button-submit']}`}
                >
                    Sign Up
                </button>
            </form>

            <div className={styles["redirect-wrapper"]}>
                <span>
                    Already have an account?
                    <Link className={styles["redirect-link"]} to={"/signin"}> Sign In</Link>
                </span>
            </div> */}
        </>
    );
}

export default SignUp;