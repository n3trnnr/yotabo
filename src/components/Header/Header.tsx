import React from "react";
import styles from './Header.module.scss'
import Nav from "./Navigation/Nav";
import SvgIcons from "../UI/Svg/SvgIcons";

interface IHeader {
    children: React.ReactNode,
}

const Header = ({ children }: IHeader) => {

    return (
        <header className={styles['header']}>
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

export default Header;