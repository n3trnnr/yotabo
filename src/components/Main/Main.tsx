import React from "react";
import styles from './Main.module.scss'
import Router from "../../router/Router";
import GlobalHeader from "../GlobalHeader/GlobalHeader";

const Main: React.FC = () => {
    return (
        <>
            <main className={styles.main}>
                <GlobalHeader children={''} />
                <section className={styles.section}>
                    <Router />
                </section>
            </main>
        </>

    );
}

export default Main;