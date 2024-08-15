import { useState } from "react";
import styles from './ModalWindow.module.scss'
import Button from "../UI/Button/Button";
import SvgIcons from "../UI/Svg/SvgIcons";
import AdvancedSettings from "./AdvancedSettings/AdvancedSettings";
import { nanoid } from "nanoid";
import { SubmitHandler, useForm } from "react-hook-form";
import { IModalWindow } from "./ModalWindow.props";
import { useAppDispatch } from "../../hooks/useStore";
import { postProjectsData } from "../../store/slices/projectSlice";

export interface IModalWindowInputs {
    title: string,
    description: string,
    priority?: 'low' | 'med' | 'high',
    deadline?: string,
    cover?: string,
    files?: any
}

const ModalWindow = ({ type, modalWindowTitle, handleShowModal }: IModalWindow) => {

    const dispatch = useAppDispatch()

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
    } = useForm<IModalWindowInputs>()

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

    const submit: SubmitHandler<IModalWindowInputs> = async (data) => {
        // console.log('data - ', data);
        if (type === "simple") {
            postProjectFormData(data)
        } else if (type === "advanced") {
        }
        handleShowModal(false)
    }

    const postProjectFormData = (data: IModalWindowInputs) => {
        dispatch(postProjectsData(data))
    }

    return (
        <div className={styles["modal-window-container"]}>
            <form onSubmit={handleSubmit(submit)} className={styles["form-wrapper"]}>
                <div className={styles.title}>{modalWindowTitle}</div>
                <input
                    {...register('title')}
                    name="title"
                    // onChange={(event) => setTitle(event.target.value)}
                    className={styles["input-title"]} type="text"
                    required
                    placeholder="Title"
                />
                <textarea
                    {...register('description')}
                    // onChange={(event) => setDescription(event.target.value)}
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