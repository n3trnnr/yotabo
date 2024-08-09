import styles from './Button.module.scss'
import { IButton } from "./Button.props";

const Button = ({ children, buttonShape, colorStyle, styleName, handleClick, title, margin, ...props }: IButton) => {
    return (
        <button
            onClick={handleClick}
            className={`${styles[`${buttonShape}`]} ${styles[`${colorStyle}`]} ${styleName || ''}`}
            style={{ marginLeft: `${margin}` }}
            {...props}
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