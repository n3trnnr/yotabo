import React, { useState } from "react";
import styles from './ModalWindow.module.scss'
import Button from "../UI/Button/Button";
import SvgIcons from "../UI/Svg/SvgIcons";
import AdvancedSettings from "./AdvancedSettings/AdvancedSettings";
import { nanoid } from "nanoid";
import { SubmitHandler, useForm } from "react-hook-form";
import { IModalWindow } from "./ModalWindow.props";

export interface IInputs {
    title: string,
    description: string,
    priority?: 'low' | 'med' | 'high',
    deadline?: string,
    cover?: string,
    files?: any
}

const ModalWindow = ({ type, modalWindowTitle, handleShowModal }: IModalWindow) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [deadline, setDeadline] = useState('')
    const [cover, setCover] = useState('')
    const [files, setFiles] = useState<any>([])

    const {
        register,
        handleSubmit,
        // reset,
        // formState: { errors, isValid }
    } = useForm<IInputs>()

    const id = nanoid()

    const newProject = {
        id: id,
        title: title,
        description: description,
        progress: 0,
        creationDate: new Date().toLocaleDateString(),
        isFavorites: false,
        isDeleted: false
    }

    const newTask = {
        id: id,
        title: title,
        description: description,
        priority: priority,
        creationDate: new Date().toLocaleDateString(),
        deadline: deadline,
        cover: cover,
        files: files
    }

    const handleUploadFile = (fileName: string) => {
        const fileId = nanoid()
        const newFile = {
            id: fileId,
            fileName: fileName
        }
        setFiles([...files, newFile])
    }

    const handleDeleteFile = (id: string) => {
        const filteredFiles = files.filter((file: any) => file.id !== id)
        setFiles([...filteredFiles])
    }

    const handleUploadDeleteCover = (coverName: string) => {
        setCover(coverName)
    }

    const submit: SubmitHandler<IInputs> = async (data) => {
        console.log('data - ', data);

        // event.preventDefault()
        if (type === "simple") {
            // console.log("simple - ", newProject);
        } else if (type === "advanced") {
            // console.log("advanced - ", newTask);
        }
        handleShowModal(false)
    }

    return (
        <div className={styles["modal-window-container"]}>
            <form onSubmit={handleSubmit(submit)} className={styles["form-wrapper"]}>
                <div className={styles.title}>{modalWindowTitle}</div>
                <input
                    {...register('title')}
                    name="title"
                    onChange={(event) => setTitle(event.target.value)}
                    className={styles["input-title"]} type="text"
                    required
                    placeholder="Title"
                />
                <textarea
                    {...register('description')}
                    onChange={(event) => setDescription(event.target.value)}
                    className={styles["textarea-description"]}
                    rows={5}
                    cols={40}
                    required
                    placeholder="Description"
                />
                {type === "advanced" &&
                    <AdvancedSettings
                        register={register}
                        files={files}
                        handleUploadFile={handleUploadFile}
                        handleDeleteFile={handleDeleteFile}
                        cover={cover}
                        handleUploadDeleteCover={handleUploadDeleteCover}
                        handeSetPriority={setPriority}
                        handleSetDeadline={setDeadline}
                    />
                }
                <div className={styles["buttons-wrapper"]}>
                    <button className={styles["button-create"]}>Create</button>
                    <input type="button" onClick={() => handleShowModal(false)} className={styles["button-cancel"]} value={"Cancel"} />
                </div>
            </form>
            <Button handleClick={() => handleShowModal(false)} colorStyle={"none"} buttonShape={"none"} styleName={styles['cross-close']}>
                <SvgIcons iconName={"cross"} />
            </Button>
        </div>
    );
}

export default ModalWindow;