import React, { useState } from "react";
import styles from './AdvancedSettings.module.scss'
import SvgIcons from "../../UI/Svg/SvgIcons";
import { nanoid } from "nanoid";
import Button from "../../UI/Button/Button";

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
                                    defaultValue={"low"}
                                    onClick={(event) => radio(event)}
                                />
                                <span className={styles["radio-description"]}>Low</span>
                            </label>

                            <label className={styles["radio"]}>
                                <input
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority-radio"
                                    defaultValue={"med"}
                                    onClick={(event) => radio(event)} />
                                <span className={styles["radio-description"]}>Med</span>
                            </label>

                            <label className={styles["radio"]}>
                                <input
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority-radio"
                                    defaultValue={"high"}
                                    onClick={(event) => radio(event)} />
                                <span className={styles["radio-description"]}>High</span>
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
                        <ul className={styles["cover-value"]}>
                            {cover ?
                                <li className={styles["file-item"]}>
                                    <span className={styles["file-value"]}>
                                        {cover}
                                    </span>
                                    <Button colorStyle={"none"}>
                                        <SvgIcons
                                            iconName={"trash"}
                                            styleName={styles["delete-icon-button"]}
                                        />
                                    </Button>
                                </li> :
                                '-'
                            }
                        </ul>
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
                        <ul>
                            {files.length ? files.map((file: string) => (
                                <li className={styles["file-item"]}>
                                    <span className={styles["file-value"]}>
                                        {file}
                                    </span>
                                    <Button colorStyle={"none"}>
                                        <SvgIcons
                                            iconName={"trash"}
                                            styleName={styles["delete-icon-button"]}
                                        />
                                    </Button>
                                </li>
                            ))
                                : <li className={styles["file-value"]}>-</li>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdvancedSettings;