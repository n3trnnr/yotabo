import styles from './AdvancedSettings.module.scss'
import SvgIcons from "../../UI/Svg/SvgIcons";
import Button from "../../UI/Button/Button";
import { IAdvancedSettings } from "./AdvancedSettings.props";
import CustomInput from '../../CustomInput/CustomInput';
import { IFile } from '../ModalWindow';

const AdvancedSettings = ({ register, files, handleDeleteFile }: IAdvancedSettings) => {

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
                                    {...register('priority', { required: true })}
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority"
                                    defaultValue={"low"}
                                />
                                <span className={styles["radio-description"]}>
                                    Low
                                </span>
                            </label>
                            <label className={styles["radio"]}>
                                <input
                                    {...register('priority', { required: true })}
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority"
                                    defaultValue={"med"}
                                />
                                <span className={styles["radio-description"]}>
                                    Med
                                </span>
                            </label>
                            <label className={styles["radio"]}>
                                <input
                                    {...register('priority', { required: true })}
                                    className={styles["input-radio"]}
                                    type="radio"
                                    name="priority"
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
                                {...register('deadline', { required: true })}
                                className={styles["deadline-input"]}
                                type="date"
                                name="deadline"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["files-block-container"]}>

                {!files?.length && <CustomInput
                    type={'file'}
                    register={register}
                    labelClassName={styles["label-file"]}
                    inputName={'file'}
                >
                    <SvgIcons iconName={"uploadFile"} styleName={styles["upload-icon"]} />
                    Upload file
                </CustomInput>}

                <ul className={styles["upload-file-wrapper"]}>
                    {files && files.map((file: IFile) => (
                        <li key={`${file.name}_${file.size}`} className={styles["uploaded-file"]}>
                            <span className={styles["uploaded-file-name"]}>
                                {file.name}
                            </span>
                            <Button colorStyle={"none"} handleClick={() => handleDeleteFile(file.name)}>
                                <SvgIcons iconName={"trash"} styleName={styles["delete-icon"]} />
                            </Button>
                        </li>
                    ))
                        // : <li className={styles["uploaded-file-name"]}>choose file</li>
                    }
                </ul>

            </div>
        </div>
    );
}

export default AdvancedSettings;

{/* <div className={styles["upload-cover-wrapper"]}>
                        <label className={styles["label-cover"]}>
                            <SvgIcons iconName={"uploadFile"} styleName={styles["upload-icon"]} />
                            Upload cover
                            <input
                                {...register('cover')}
                                name='cover'
                                type="file"
                            onChange={(event) => {
                                handleUploadFile(event)
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
                    </div> */}