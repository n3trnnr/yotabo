import React from "react";
import styles from './Main.module.scss'
import SectionHeader from "./SectionHeader/SectionHeader";
import Router from "../../router/Router";
import Header from "../Header/Header";

const Main: React.FC = () => {
    return (
        <>
            <main className={styles.main}>
                <Header children={''} />
                <section className={styles.section}>
                    <SectionHeader />
                    <Router />
                </section>
            </main>
        </>

    );
}

export default Main;