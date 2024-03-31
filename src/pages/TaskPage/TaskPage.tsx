import React from 'react';
import MainComponentHeader from '../../components/MainComponentHeader/MainComponentHeader';
import styles from './TaskPage.module.scss'
import Button from '../../components/UI/Button/Button';
import SvgIcons from '../../components/UI/Svg/SvgIcons';

const TaskPage: React.FC = () => {
    return (
        <>
            <MainComponentHeader type="none" />
            <div className={styles["task-page"]}>
                <div className={styles["task-container"]}>
                    <div className={styles["task-wrapper"]}>
                        <div className={styles["cover-wrapper"]}>
                            <button className={styles["upload-cover-button"]}>
                                <SvgIcons iconName={"uploadCover"} />
                                <div className={styles["button-name"]}>Upload</div>
                            </button>
                            {/* <img className={styles.cover} src="" alt="" /> */}
                        </div>
                        <div className={styles["content-wrapper"]}>
                            <div className={styles["text-content"]}>
                                <div className={styles["title-wrapper"]}>
                                    <span className={styles.title}>Title</span>
                                </div>
                                <div className={styles.description}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Bibendum amet amet aliquet et eget faucibus netus in.
                                        Pulvinar vulputate elementum faucibus ac consectetur lacus id.
                                        Velit orci posuere vestibulum eget amet.
                                        Quisque est etiam ipsum euismod eu velit nisl.
                                    </p>
                                </div>
                            </div>

                            <div className={styles["info-bar"]}>
                                <div className={styles["priority-container"]}>
                                    <div className={styles["priority-title"]}>Priority</div>
                                    <div className={styles["priority-value-wrapper"]}>
                                        <div className={styles["priority-high"]}></div>
                                        <span>High</span>
                                    </div>
                                </div>
                                <div className={styles["creation-date-container"]}>
                                    <div className={styles["creation-date-title"]}>Сreation date</div>
                                    <div className={styles["creation-date-value"]}>16.04.2024</div>

                                </div>
                                <div className={styles["deadline-container"]}>
                                    <div className={styles["deadline-title"]}>Deadline</div>
                                    <div className={styles["deadline-value"]}>29.05.2024</div>
                                </div>
                                <div className={styles["files-container"]}>
                                    <div className={styles["files-title"]}>Files</div>
                                    <div className={styles["files-wrapper"]}>
                                        <div className={styles["attach-files-icon"]}><SvgIcons iconName="attachFile" /></div>
                                        <span>file-name.pdf</span>
                                        <div className={styles["buttons-wrapper"]}>
                                            <Button styleName={'none'}>
                                                <SvgIcons iconName="uploadFile" styleName={styles["upload-file-button"]} />
                                            </Button>
                                            <Button styleName={'none'} margin={'20px'}>
                                                <SvgIcons iconName="trash" styleName={styles["delete-button"]} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles["files-wrapper"]}>
                                        <div className={styles["attach-files-icon"]}><SvgIcons iconName="attachFile" /></div>
                                        <span>file-name.pdf</span>
                                        <div className={styles["buttons-wrapper"]}>
                                            <Button styleName={'none'}>
                                                <SvgIcons iconName="uploadFile" styleName={styles["upload-file-button"]} />
                                            </Button>
                                            <Button styleName={'none'} margin={'20px'}>
                                                <SvgIcons iconName="trash" styleName={styles["delete-button"]} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles["files-wrapper"]}>
                                        <div className={styles["attach-files-icon"]}><SvgIcons iconName="attachFile" /></div>
                                        <span>file-name.pdf</span>
                                        <div className={styles["buttons-wrapper"]}>
                                            <Button styleName={'none'}>
                                                <SvgIcons iconName="uploadFile" styleName={styles["upload-file-button"]} />
                                            </Button>
                                            <Button styleName={'none'} margin={'20px'}>
                                                <SvgIcons iconName="trash" styleName={styles["delete-button"]} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={styles['burger-menu']}>
                            <Button styleName={'none'}>
                                <SvgIcons iconName={'burgerMenu'} />
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskPage;