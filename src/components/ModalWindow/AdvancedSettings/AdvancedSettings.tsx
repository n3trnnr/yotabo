import React from "react";
import styles from './AdvancedSettings.module.scss'
import SvgIcons from "../../UI/Svg/SvgIcons";
import Button from "../../UI/Button/Button";

interface IAdvancedSettings {
    files: []
    handleUploadFile: (fileName: string) => void;
    handleDeleteFile: (id: string) => void;
    cover: string;
    handleUploadDeleteCover: (coverName: string) => void;
    handeSetPriority: (priority: string) => void;
    handleSetDeadline: (date: string) => void;
}

const AdvancedSettings: React.FC<IAdvancedSettings> = ({
    files,
    handleUploadFile,
    handleDeleteFile,
    cover,
    handleUploadDeleteCover,
    handeSetPriority,
    handleSetDeadline
}) => {

    return (
        <div className={styles["advanced-settings-container"]}>
            <div className={styles["info-block-container"]}>
                <div className={styles["info-block-wrapper"]}>
                    <div className={styles["priority-wrapper"]}>
                        <div className={styles["priority-title"]}>
                            Priority
                        </div>
                        <div className={styles["radio-group-wrapper"]}>
                            <label className={styles["radio"]}>
                                <input
                                    onChange={(event) => handeSetPriority(event.target.defaultValue)}
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority-radio"
                                    defaultValue={"low"}
                                />
                                <span className={styles["radio-description"]}>
                                    Low
                                </span>
                            </label>
                            <label className={styles["radio"]}>
                                <input
                                    onChange={(event) => handeSetPriority(event.target.defaultValue)}
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority-radio"
                                    defaultValue={"med"}
                                />
                                <span className={styles["radio-description"]}>
                                    Med
                                </span>
                            </label>
                            <label className={styles["radio"]}>
                                <input
                                    onChange={(event) => handeSetPriority(event.target.defaultValue)}
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority-radio"
                                    defaultValue={"high"}
                                />
                                <span className={styles["radio-description"]}>
                                    High
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className={styles["deadline-wrapper"]}>
                        <div className={styles["deadline-title"]}>
                            Deadline
                        </div>
                        <div >
                            <input
                                onChange={(event) => handleSetDeadline(event.target.value)}
                                className={styles["deadline-input"]}
                                type="date"
                                name="deadline"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["files-block-container"]}>
                <div className={styles["files-block-wrapper"]}>
                    <div className={styles["upload-cover-wrapper"]}>
                        <label className={styles["label-cover"]}>
                            <SvgIcons iconName={"uploadFile"} styleName={styles["upload-icon"]} />
                            Upload cover
                            <input type="file"
                                onChange={(event) => {
                                    handleUploadDeleteCover(event.target.value)
                                    event.target.value = ''
                                }}
                            />
                        </label>
                        <ul>
                            {cover ?
                                <li className={styles["uploaded-file"]}>
                                    <span className={styles["uploaded-file-name"]}>
                                        {cover}
                                    </span>
                                    <Button handleClick={() => handleUploadDeleteCover('')} colorStyle={"none"}>
                                        <SvgIcons iconName={"trash"} styleName={styles["delete-icon"]} />
                                    </Button>
                                </li> : <li className={styles["uploaded-file-name"]}>choose file</li>
                            }
                        </ul>
                    </div>
                    <div className={styles["upload-file-wrapper"]}>
                        <label className={styles["label-file"]}>
                            <SvgIcons iconName={"uploadFile"} styleName={styles["upload-icon"]} />
                            Upload file
                            <input type="file"
                                onChange={(event) => {
                                    handleUploadFile(event.target.value)
                                    event.target.value = ''
                                }}
                            />
                        </label>
                        <ul>
                            {files.length ? files.map((file: any) => (
                                <li key={file.id} className={styles["uploaded-file"]}>
                                    <span className={styles["uploaded-file-name"]}>
                                        {file.fileName}
                                    </span>
                                    <Button colorStyle={"none"} handleClick={() => handleDeleteFile(file.id)}>
                                        <SvgIcons iconName={"trash"} styleName={styles["delete-icon"]} />
                                    </Button>
                                </li>
                            )) : <li className={styles["uploaded-file-name"]}>choose file</li>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdvancedSettings;