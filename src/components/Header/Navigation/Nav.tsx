import React from "react";
import styles from './Nav.module.scss'
import SvgIcons from "../../UI/Svg/SvgIcons";
import Button from "../../UI/Button/Button";

const Nav: React.FC = () => {
    return (
        <nav className={styles["header-nav"]}>
            <ul className={styles["header-nav-items-list"]}>
                <li>
                    <Button buttonShape={'square'} styleName={'light-grey'} margin={'10px'}>
                        <SvgIcons iconName={'lightTheme'} />
                    </Button>
                </li>
                <li>
                    <Button buttonShape={'square'} styleName={'light-grey'} margin={'10px'}>
                        <SvgIcons iconName={'notification'} />
                    </Button>
                </li>
                <li>
                    <Button buttonShape={'square'} styleName={'light-grey'} margin={'10px'}>
                        <SvgIcons iconName={'user'} />
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;