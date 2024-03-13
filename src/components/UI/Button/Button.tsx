import React, { ReactNode } from "react";
import styles from './Button.module.scss'

interface IButton {
    children: ReactNode;
    buttonShape: 'square' | 'rectangle';
    styleName: 'blue' | 'dark-grey' | 'light-grey';
    handleClick?: () => void;
    title?: string;
}

const Button: React.FC<IButton> = ({ children, buttonShape, styleName, title }) => {
    return (
        <button className={`${styles[`${buttonShape}`]} ${styles[`${styleName}`]}`}>
            <div className={styles['icon-wrapper']}>{children}</div>
            {
                title &&
                buttonShape === 'rectangle' &&
                <span className={styles['title']}>
                    {title}
                </span>
            }
        </button>
    );
}

export default Button;