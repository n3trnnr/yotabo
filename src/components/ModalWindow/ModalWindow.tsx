import React, { ReactNode } from "react";
import styles from './ModalWindow.module.scss'
import Button from "../UI/Button/Button";
import SvgIcons from "../UI/Svg/SvgIcons";

interface IModalWindow {
    title: string;
    handleShowModal: (state: boolean) => void;
    children?: ReactNode;
}

const ModalWindow: React.FC<IModalWindow> = ({ title, handleShowModal, children }) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={styles['modal-window-container']}>
            <form onSubmit={(event) => handleSubmit(event)} className={styles["form-wrapper"]}>
                <div className={styles.title}>{title}</div>
                <input className={styles["input-title"]} type="text" placeholder="Title" />
                <textarea className={styles["textarea-description"]} rows={5} cols={40} placeholder="Description" />
                {children}
                <div className={styles['buttons-wrapper']}>
                    <button className={styles["button-create"]}>Create</button>
                    <button className={styles["button-cancel"]}>Cancel</button>
                </div>
            </form>
            <Button handleClick={() => handleShowModal(false)} colorStyle={"none"} buttonShape={"none"} styleName={styles['cross-close']}>
                <SvgIcons iconName={"cross"} />
            </Button>
        </div>
    );
}

export default ModalWindow;