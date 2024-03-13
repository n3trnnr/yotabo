import React from "react";
import styles from './Nav.module.scss'
import SvgIcons from "../../UI/Svg/SvgIcons";
import Button from "../../UI/Button/Button";

const Nav: React.FC = () => {
    return (
        <nav className={styles["header-nav"]}>
            <ul className={styles["header-nav-items-list"]}>
                <li className={styles['button-wrapper']}>
                    <Button buttonShape={'square'} styleName={'blue'}>
                        <SvgIcons iconName={'lightTheme'} />
                    </Button>
                </li>
                <li className={styles['button-wrapper']}>
                    <Button buttonShape={'square'} styleName={'dark-grey'}>
                        <SvgIcons iconName={'notification'} />
                    </Button>
                </li>
                <li className={styles['button-wrapper']}>
                    <Button buttonShape={'square'} styleName={'light-grey'}>
                        <SvgIcons iconName={'user'} />
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;