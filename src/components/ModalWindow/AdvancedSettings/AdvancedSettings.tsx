import React, { useState } from "react";
import styles from './AdvancedSettings.module.scss'
import SvgIcons from "../../UI/Svg/SvgIcons";
import { nanoid } from "nanoid";

//Доделать hover окружности radio!!!

const AdvancedSettings: React.FC = () => {

    const id = nanoid()

    const [cover, setCover] = useState<string | undefined>(undefined)
    const [files, setFiles] = useState<string[]>([])

    const radio = (event: any) => {
        console.log(event.target.defaultValue);
    }

    const deadline = (event: any) => {
        console.log(event.target.value);

    }


    return (
        <div className={styles["advanced-settings-wrapper"]}>
            <div className={styles["info-container"]}>
                <div className={styles["info-wrapper"]}>
                    <div className={styles["priority-wrapper"]}>
                        <div className={styles["priority-title"]}>Priority</div>
                        <div className={styles["radios-wrapper"]}>
                            <label className={styles["radio"]}>
                                <input
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority-radio"
                                    id="1" defaultValue={"low"}
                                    onClick={(event) => radio(event)}
                                />
                                <span>Low</span>
                            </label>

                            <label className={styles["radio"]}>
                                <input
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority-radio"
                                    id="2"
                                    defaultValue={"med"}
                                    onClick={(event) => radio(event)} />
                                <span>Med</span>
                            </label>

                            <label className={styles["radio"]}>
                                <input
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority-radio"
                                    id="3"
                                    defaultValue={"high"}
                                    onClick={(event) => radio(event)} />
                                <span>High</span>
                            </label>
                        </div>
                    </div>

                    <div className={styles["deadline-wrapper"]}>
                        <div className={styles["deadline-title"]}>Deadline</div>
                        <div >
                            <input
                                className={styles["deadline-input"]}
                                onClick={(event) => deadline(event)} type="date" name="deadline"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["files-container"]}>
                <div className={styles["files-wrapper"]}>
                    <div className={styles["cover-wrapper"]}>
                        <label className={styles["upload-cover-wrapper"]}>
                            <SvgIcons
                                iconName={"uploadFile"}
                                styleName={styles["upload-cover-icon"]}
                            />
                            Upload cover
                            <input type="file" onChange={(event) => setCover(event.target.value)} />
                        </label>
                        <div className={styles["cover-value"]}>{cover ? cover : 'cover'}</div>
                    </div>

                    <div className={styles["file-wrapper"]}>
                        <label className={styles["upload-file-wrapper"]}>
                            <SvgIcons
                                iconName={"uploadFile"}
                                styleName={styles["upload-file-icon"]}
                            />
                            Upload file
                            <input type="file" onChange={(event) => setFiles([...files, event.target.value])} />
                        </label>
                        <div className={styles["file-value"]}>
                            {files.length ? files.map((file: string) => (
                                <>{file}</>
                            ))
                                : "files"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvancedSettings;