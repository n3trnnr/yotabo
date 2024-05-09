import React from "react";
import styles from './GlobalHeader.module.scss'
import Nav from "./Navigation/Nav";
import SvgIcons from "../UI/Svg/SvgIcons";

interface IGlobalHeader {
    children?: React.ReactNode,
}

const GlobalHeader: React.FC<IGlobalHeader> = ({ children }) => {

    return (
        <header className={styles['header']}>
            <div className={styles["logo-container"]}>
                <a className={styles["logo-wrapper"]}>
                    <SvgIcons iconName={'logo'} styleName={styles['logo-icon']} />
                    <h1>Yotabo</h1>
                </a>
            </div>
            {
                children ?
                    <div>
                        {children}
                    </div>
                    :
                    <form className={styles["search-form"]} action="">
                        <button className={styles["search-button"]}>
                            <SvgIcons iconName={"search"} />
                        </button>
                        <input className={styles["input-search"]} type="text" placeholder="Search" />
                    </form>
            }
            <Nav />
        </header>
    );
}

export default GlobalHeader;