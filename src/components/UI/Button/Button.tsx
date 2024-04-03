import React, { ReactNode } from "react";
import styles from './Button.module.scss'

interface IButton {
    children: ReactNode;
    buttonShape?: 'square' | 'rectangle' | 'none';
    colorStyle: 'blue' | 'dark-grey' | 'light-grey' | 'none';
    styleName?: string;
    handleClick?: () => void;
    title?: string;
    margin?: string;
}

const Button: React.FC<IButton> = ({ children, buttonShape, colorStyle, styleName, handleClick, title, margin }) => {
    return (
        <button
            onClick={handleClick}
            className={`${styles[`${buttonShape}`]} ${styles[`${colorStyle}`]} ${styleName || ''}`}
            style={{ marginLeft: `${margin}` }}
        >
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