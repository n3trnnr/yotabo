import React from "react";
import styles from './Aside.module.scss'

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles["logo-container"]}>
                <div className={styles["logo-wrapper"]}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10C0 4.47715 4.47715 0 10 0H35C40.5228 0 45 4.47715 45 10V35C45 40.5228 40.5228 45 35 45H10C4.47715 45 0 40.5228 0 35V10Z" fill="#464646" />
                        <path d="M7.47487 9.94975C6.10804 8.58291 6.10804 6.36683 7.47487 5L22.507 20.0322L37.5392 5C38.906 6.36683 38.906 8.58291 37.5392 9.94975L26.7389 20.75H36.5C38.433 20.75 40 22.317 40 24.25H24.25V40H20.75V24.25H5C5 22.317 6.567 20.75 8.5 20.75H18.2751L7.47487 9.94975Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 26V36.5C5 38.433 6.567 40 8.5 40H19V26H5ZM15.5 29.5H8.5V36.5H15.5V29.5Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M26 26H40V36.5C40 38.433 38.433 40 36.5 40H26V26ZM29.5 29.5H36.5V36.5H29.5V29.5Z" fill="white" />
                    </svg>
                    Yotabo
                </div>
            </div>

            <ul className={styles["nav-items-list"]}>
                <li className={styles["item-wrapper"]}>
                    <div className={styles["nav-item"]}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.8125 18.375C4.23234 18.375 3.67594 18.1445 3.2657 17.7343C2.85547 17.3241 2.625 16.7677 2.625 16.1875V1.3125C2.625 0.964403 2.48672 0.630564 2.24058 0.384422C1.99444 0.138281 1.6606 0 1.3125 0C0.964403 0 0.630564 0.138281 0.384422 0.384422C0.138281 0.630564 0 0.964403 0 1.3125V16.1875C0 17.4639 0.50703 18.6879 1.40955 19.5905C2.31207 20.493 3.53615 21 4.8125 21H19.6875C20.0356 21 20.3694 20.8617 20.6156 20.6156C20.8617 20.3694 21 20.0356 21 19.6875C21 19.3394 20.8617 19.0056 20.6156 18.7594C20.3694 18.5133 20.0356 18.375 19.6875 18.375H4.8125Z" fill="#9C9C9C" />
                            <path d="M17.0625 15.75C17.4106 15.75 17.7444 15.6117 17.9906 15.3656C18.2367 15.1194 18.375 14.7856 18.375 14.4375V9.1875C18.375 8.8394 18.2367 8.50556 17.9906 8.25942C17.7444 8.01328 17.4106 7.875 17.0625 7.875C16.7144 7.875 16.3806 8.01328 16.1344 8.25942C15.8883 8.50556 15.75 8.8394 15.75 9.1875V14.4375C15.75 14.7856 15.8883 15.1194 16.1344 15.3656C16.3806 15.6117 16.7144 15.75 17.0625 15.75Z" fill="#9C9C9C" />
                            <path d="M6.5625 15.75C6.9106 15.75 7.24444 15.6117 7.49058 15.3656C7.73672 15.1194 7.875 14.7856 7.875 14.4375V9.1875C7.875 8.8394 7.73672 8.50556 7.49058 8.25942C7.24444 8.01328 6.9106 7.875 6.5625 7.875C6.2144 7.875 5.88056 8.01328 5.63442 8.25942C5.38828 8.50556 5.25 8.8394 5.25 9.1875V14.4375C5.25 14.7856 5.38828 15.1194 5.63442 15.3656C5.88056 15.6117 6.2144 15.75 6.5625 15.75Z" fill="#9C9C9C" />
                            <path d="M11.8125 15.75C12.1606 15.75 12.4944 15.6117 12.7406 15.3656C12.9867 15.1194 13.125 14.7856 13.125 14.4375V4.8125C13.125 4.4644 12.9867 4.13056 12.7406 3.88442C12.4944 3.63828 12.1606 3.5 11.8125 3.5C11.4644 3.5 11.1306 3.63828 10.8844 3.88442C10.6383 4.13056 10.5 4.4644 10.5 4.8125V14.4375C10.5 14.7856 10.6383 15.1194 10.8844 15.3656C11.1306 15.6117 11.4644 15.75 11.8125 15.75Z" fill="#9C9C9C" />
                        </svg>
                        Dashboard
                    </div>
                </li>

                <li className={styles["item-wrapper"]}>
                    <div className={styles["nav-item"]}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.625 2.625H10.913C10.7777 2.62589 10.6439 2.59597 10.5219 2.5375L7.76037 1.1515C7.39584 0.969977 6.99423 0.875338 6.587 0.875H4.375C3.2151 0.876389 2.10311 1.33777 1.28294 2.15794C0.462772 2.97811 0.00138938 4.0901 0 5.25V15.75C0.00138938 16.9099 0.462772 18.0219 1.28294 18.8421C2.10311 19.6622 3.2151 20.1236 4.375 20.125H16.625C17.7849 20.1236 18.8969 19.6622 19.7171 18.8421C20.5372 18.0219 20.9986 16.9099 21 15.75V7C20.9986 5.8401 20.5372 4.72811 19.7171 3.90794C18.8969 3.08777 17.7849 2.62639 16.625 2.625ZM4.375 2.625H6.587C6.72233 2.62411 6.85608 2.65403 6.97812 2.7125L9.73962 4.09412C10.1038 4.27716 10.5054 4.3733 10.913 4.375H16.625C17.1483 4.37585 17.6594 4.53309 18.0926 4.82651C18.5259 5.11993 18.8616 5.53616 19.0566 6.02175L1.75 6.11975V5.25C1.75 4.55381 2.02656 3.88613 2.51884 3.39384C3.01113 2.90156 3.67881 2.625 4.375 2.625ZM16.625 18.375H4.375C3.67881 18.375 3.01113 18.0984 2.51884 17.6062C2.02656 17.1139 1.75 16.4462 1.75 15.75V7.86975L19.25 7.77087V15.75C19.25 16.4462 18.9734 17.1139 18.4812 17.6062C17.9889 18.0984 17.3212 18.375 16.625 18.375Z" fill="#9C9C9C" />
                        </svg>
                        Projects
                    </div>
                </li>

                <li className={styles["item-wrapper"]}>
                    <div className={styles["nav-item"]}>
                        <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.49982 7C8.80759 7 8.1309 7.20527 7.55533 7.58986C6.97976 7.97444 6.53115 8.52107 6.26624 9.16061C6.00134 9.80015 5.93203 10.5039 6.06707 11.1828C6.20212 11.8617 6.53547 12.4854 7.02495 12.9749C7.51443 13.4644 8.13807 13.7977 8.81701 13.9327C9.49594 14.0678 10.1997 13.9985 10.8392 13.7336C11.4788 13.4687 12.0254 13.0201 12.41 12.4445C12.7946 11.8689 12.9998 11.1922 12.9998 10.5C12.9998 9.57174 12.6311 8.6815 11.9747 8.02513C11.3183 7.36875 10.4281 7 9.49982 7ZM9.49982 12.25C9.15371 12.25 8.81536 12.1474 8.52758 11.9551C8.23979 11.7628 8.01549 11.4895 7.88303 11.1697C7.75058 10.8499 7.71593 10.4981 7.78345 10.1586C7.85097 9.81913 8.01765 9.50731 8.26239 9.26256C8.50713 9.01782 8.81895 8.85115 9.15842 8.78363C9.49788 8.7161 9.84975 8.75076 10.1695 8.88321C10.4893 9.01566 10.7626 9.23997 10.9549 9.52775C11.1472 9.81554 11.2498 10.1539 11.2498 10.5C11.2498 10.9641 11.0654 11.4092 10.7373 11.7374C10.4091 12.0656 9.96395 12.25 9.49982 12.25Z" fill="#9C9C9C" />
                            <path d="M17.6321 12.1625L17.2436 11.9385C17.4185 10.9869 17.4185 10.0114 17.2436 9.05975L17.6321 8.83575C17.9308 8.66339 18.1927 8.43387 18.4028 8.1603C18.6128 7.88673 18.7669 7.57447 18.8563 7.24134C18.9457 6.90821 18.9686 6.56074 18.9237 6.21876C18.8788 5.87679 18.7669 5.54701 18.5946 5.24825C18.4222 4.94949 18.1927 4.68761 17.9191 4.47755C17.6456 4.2675 17.3333 4.11338 17.0002 4.024C16.667 3.93463 16.3196 3.91174 15.9776 3.95665C15.6356 4.00156 15.3058 4.11339 15.0071 4.28575L14.6177 4.51063C13.8823 3.8823 13.0372 3.39522 12.1248 3.07387V2.625C12.1248 1.92881 11.8483 1.26113 11.356 0.768845C10.8637 0.276562 10.196 0 9.49982 0C8.80363 0 8.13595 0.276562 7.64367 0.768845C7.15138 1.26113 6.87482 1.92881 6.87482 2.625V3.07387C5.96254 3.39637 5.11769 3.88465 4.38282 4.51412L3.9917 4.2875C3.38833 3.9394 2.6714 3.84525 1.99861 4.02575C1.32582 4.20626 0.752296 4.64663 0.404199 5.25C0.0561023 5.85337 -0.0380504 6.5703 0.142453 7.24309C0.322957 7.91588 0.763331 8.4894 1.3667 8.8375L1.7552 9.0615C1.58029 10.0131 1.58029 10.9886 1.7552 11.9403L1.3667 12.1643C0.763331 12.5123 0.322957 13.0859 0.142453 13.7587C-0.0380504 14.4314 0.0561023 15.1484 0.404199 15.7518C0.752296 16.3551 1.32582 16.7955 1.99861 16.976C2.6714 17.1565 3.38833 17.0623 3.9917 16.7142L4.38107 16.4894C5.11674 17.1178 5.96218 17.6049 6.87482 17.9261V18.375C6.87482 19.0712 7.15138 19.7389 7.64367 20.2312C8.13595 20.7234 8.80363 21 9.49982 21C10.196 21 10.8637 20.7234 11.356 20.2312C11.8483 19.7389 12.1248 19.0712 12.1248 18.375V17.9261C13.0371 17.6036 13.882 17.1153 14.6168 16.4859L15.0079 16.7116C15.6113 17.0597 16.3283 17.1539 17.001 16.9734C17.6738 16.7929 18.2474 16.3525 18.5954 15.7491C18.9435 15.1458 19.0377 14.4288 18.8572 13.756C18.6767 13.0832 18.2363 12.5097 17.6329 12.1616L17.6321 12.1625ZM15.4026 8.8585C15.6989 9.93218 15.6989 11.0661 15.4026 12.1397C15.3508 12.3266 15.3626 12.5254 15.4361 12.7048C15.5096 12.8843 15.6406 13.0342 15.8086 13.1311L16.7571 13.6789C16.9582 13.7949 17.1049 13.9861 17.1651 14.2103C17.2252 14.4345 17.1938 14.6735 17.0778 14.8746C16.9617 15.0756 16.7706 15.2224 16.5463 15.2825C16.3221 15.3427 16.0832 15.3113 15.8821 15.1952L14.9318 14.6458C14.7637 14.5484 14.568 14.5097 14.3755 14.5359C14.1831 14.562 14.0047 14.6515 13.8687 14.7901C13.0899 15.5852 12.1087 16.1525 11.0311 16.4307C10.843 16.4791 10.6763 16.5887 10.5573 16.7422C10.4384 16.8957 10.3739 17.0844 10.3739 17.2786V18.375C10.3739 18.6071 10.2818 18.8296 10.1177 18.9937C9.95357 19.1578 9.73101 19.25 9.49895 19.25C9.26688 19.25 9.04432 19.1578 8.88023 18.9937C8.71614 18.8296 8.62395 18.6071 8.62395 18.375V17.2795C8.62404 17.0853 8.55952 16.8966 8.44055 16.7431C8.32158 16.5895 8.15492 16.48 7.96682 16.4316C6.88913 16.1522 5.90824 15.5837 5.13007 14.7875C4.99403 14.6488 4.81572 14.5594 4.62324 14.5333C4.43075 14.5071 4.23504 14.5458 4.06695 14.6431L3.11845 15.1917C3.0189 15.2501 2.90879 15.2882 2.79446 15.3038C2.68013 15.3195 2.56383 15.3123 2.45227 15.2828C2.34071 15.2533 2.23608 15.2021 2.14442 15.132C2.05275 15.0619 1.97585 14.9743 1.91816 14.8744C1.86046 14.7745 1.8231 14.6641 1.80822 14.5497C1.79335 14.4353 1.80126 14.319 1.83149 14.2076C1.86172 14.0963 1.91369 13.992 1.98439 13.9008C2.05509 13.8096 2.14313 13.7333 2.24345 13.6763L3.19195 13.1285C3.3599 13.0316 3.49091 12.8816 3.5644 12.7022C3.63789 12.5228 3.64969 12.324 3.59795 12.1371C3.30164 11.0634 3.30164 9.92956 3.59795 8.85588C3.64876 8.6694 3.63639 8.47134 3.56279 8.29263C3.48918 8.11392 3.35848 7.9646 3.19107 7.868L2.24257 7.32025C2.04149 7.20422 1.89474 7.01306 1.8346 6.78882C1.77445 6.56459 1.80585 6.32565 1.92189 6.12456C2.03792 5.92348 2.22908 5.77672 2.45331 5.71658C2.67755 5.65644 2.91649 5.68784 3.11757 5.80387L4.06782 6.35337C4.23546 6.45095 4.43076 6.49006 4.62303 6.46456C4.81531 6.43906 4.99367 6.3504 5.13007 6.2125C5.9089 5.41743 6.89007 4.85014 7.9677 4.57188C8.15638 4.52337 8.32347 4.41328 8.4425 4.25906C8.56154 4.10484 8.6257 3.91531 8.62482 3.7205V2.625C8.62482 2.39294 8.71701 2.17038 8.88111 2.00628C9.0452 1.84219 9.26776 1.75 9.49982 1.75C9.73189 1.75 9.95445 1.84219 10.1185 2.00628C10.2826 2.17038 10.3748 2.39294 10.3748 2.625V3.7205C10.3747 3.91471 10.4392 4.10344 10.5582 4.25695C10.6772 4.41045 10.8439 4.52002 11.0319 4.56838C12.11 4.84763 13.0912 5.41615 13.8696 6.2125C14.0056 6.35116 14.1839 6.44061 14.3764 6.46675C14.5689 6.49289 14.7646 6.45423 14.9327 6.35687L15.8812 5.80825C15.9807 5.74989 16.0909 5.7118 16.2052 5.69616C16.3195 5.68053 16.4358 5.68767 16.5474 5.71716C16.6589 5.74666 16.7636 5.79793 16.8552 5.86802C16.9469 5.93812 17.0238 6.02565 17.0815 6.12559C17.1392 6.22552 17.1766 6.33588 17.1914 6.45032C17.2063 6.56475 17.1984 6.68099 17.1682 6.79236C17.1379 6.90372 17.086 7.008 17.0153 7.0992C16.9446 7.1904 16.8565 7.26672 16.7562 7.32375L15.8077 7.8715C15.6406 7.96837 15.5103 8.11779 15.437 8.29648C15.3637 8.47517 15.3516 8.67221 15.4026 8.8585Z" fill="#9C9C9C" />
                        </svg>
                        Settings
                    </div>
                </li>

                <li className={styles["item-wrapper"]}>
                    <div className={styles["nav-item"]}>
                        <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.375 3.5H14.6625C14.4594 2.51249 13.9221 1.62518 13.1411 0.987628C12.3601 0.350079 11.3832 0.00127271 10.375 0H8.625C7.61682 0.00127271 6.6399 0.350079 5.85891 0.987628C5.07791 1.62518 4.54058 2.51249 4.3375 3.5H1.625C1.39294 3.5 1.17038 3.59219 1.00628 3.75628C0.842187 3.92038 0.75 4.14294 0.75 4.375C0.75 4.60706 0.842187 4.82962 1.00628 4.99372C1.17038 5.15781 1.39294 5.25 1.625 5.25H2.5V16.625C2.50139 17.7849 2.96277 18.8969 3.78294 19.7171C4.60311 20.5372 5.71511 20.9986 6.875 21H12.125C13.2849 20.9986 14.3969 20.5372 15.2171 19.7171C16.0372 18.8969 16.4986 17.7849 16.5 16.625V5.25H17.375C17.6071 5.25 17.8296 5.15781 17.9937 4.99372C18.1578 4.82962 18.25 4.60706 18.25 4.375C18.25 4.14294 18.1578 3.92038 17.9937 3.75628C17.8296 3.59219 17.6071 3.5 17.375 3.5ZM8.625 1.75H10.375C10.9177 1.75066 11.447 1.9192 11.8902 2.23251C12.3333 2.54582 12.6687 2.98856 12.8504 3.5H6.14963C6.33126 2.98856 6.66666 2.54582 7.10984 2.23251C7.55301 1.9192 8.08226 1.75066 8.625 1.75ZM14.75 16.625C14.75 17.3212 14.4734 17.9889 13.9812 18.4812C13.4889 18.9734 12.8212 19.25 12.125 19.25H6.875C6.17881 19.25 5.51113 18.9734 5.01885 18.4812C4.52656 17.9889 4.25 17.3212 4.25 16.625V5.25H14.75V16.625Z" fill="#9C9C9C" />
                            <path d="M7.75 15.75C7.98206 15.75 8.20462 15.6578 8.36872 15.4937C8.53281 15.3296 8.625 15.1071 8.625 14.875V9.625C8.625 9.39294 8.53281 9.17038 8.36872 9.00628C8.20462 8.84219 7.98206 8.75 7.75 8.75C7.51794 8.75 7.29538 8.84219 7.13128 9.00628C6.96719 9.17038 6.875 9.39294 6.875 9.625V14.875C6.875 15.1071 6.96719 15.3296 7.13128 15.4937C7.29538 15.6578 7.51794 15.75 7.75 15.75Z" fill="#9C9C9C" />
                            <path d="M11.25 15.75C11.4821 15.75 11.7046 15.6578 11.8687 15.4937C12.0328 15.3296 12.125 15.1071 12.125 14.875V9.625C12.125 9.39294 12.0328 9.17038 11.8687 9.00628C11.7046 8.84219 11.4821 8.75 11.25 8.75C11.0179 8.75 10.7954 8.84219 10.6313 9.00628C10.4672 9.17038 10.375 9.39294 10.375 9.625V14.875C10.375 15.1071 10.4672 15.3296 10.6313 15.4937C10.7954 15.6578 11.0179 15.75 11.25 15.75Z" fill="#9C9C9C" />
                        </svg>
                        Trash
                    </div>
                </li>
            </ul>

            <ul className={styles["nav-item-logout"]}>
                <li className={styles["item-wrapper"]}>
                    <div className={styles["nav-item"]}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9754 8.0255L16.5812 4.63138C16.4162 4.47199 16.1952 4.38379 15.9658 4.38579C15.7364 4.38778 15.5169 4.4798 15.3547 4.64203C15.1924 4.80427 15.1004 5.02373 15.0984 5.25315C15.0964 5.48257 15.1846 5.7036 15.344 5.86862L18.7381 9.26275C18.839 9.36559 18.9271 9.48016 19.0006 9.604C18.9875 9.604 18.977 9.597 18.9639 9.597L5.24037 9.625C5.00831 9.625 4.78575 9.71719 4.62166 9.88128C4.45756 10.0454 4.36537 10.2679 4.36537 10.5C4.36537 10.7321 4.45756 10.9546 4.62166 11.1187C4.78575 11.2828 5.00831 11.375 5.24037 11.375L18.9586 11.347C18.9831 11.347 19.0032 11.3347 19.0269 11.333C18.9493 11.481 18.8508 11.6171 18.7346 11.7372L15.3405 15.1314C15.2569 15.2121 15.1903 15.3086 15.1444 15.4154C15.0986 15.5221 15.0744 15.637 15.0734 15.7531C15.0724 15.8693 15.0945 15.9845 15.1385 16.0921C15.1825 16.1996 15.2475 16.2973 15.3297 16.3795C15.4118 16.4616 15.5095 16.5266 15.617 16.5706C15.7246 16.6146 15.8398 16.6367 15.956 16.6357C16.0722 16.6347 16.187 16.6106 16.2937 16.5647C16.4005 16.5189 16.497 16.4522 16.5777 16.3686L19.9719 12.9745C20.628 12.3182 20.9966 11.4281 20.9966 10.5C20.9966 9.57193 20.628 8.68185 19.9719 8.0255H19.9754Z" fill="#9C9C9C" />
                            <path d="M6.125 19.25H4.375C3.67881 19.25 3.01113 18.9734 2.51884 18.4812C2.02656 17.9889 1.75 17.3212 1.75 16.625V4.375C1.75 3.67881 2.02656 3.01113 2.51884 2.51884C3.01113 2.02656 3.67881 1.75 4.375 1.75H6.125C6.35706 1.75 6.57962 1.65781 6.74372 1.49372C6.90781 1.32962 7 1.10706 7 0.875C7 0.642936 6.90781 0.420376 6.74372 0.256282C6.57962 0.0921873 6.35706 0 6.125 0H4.375C3.2151 0.00138938 2.10311 0.462772 1.28294 1.28294C0.462772 2.10311 0.00138938 3.2151 0 4.375V16.625C0.00138938 17.7849 0.462772 18.8969 1.28294 19.7171C2.10311 20.5372 3.2151 20.9986 4.375 21H6.125C6.35706 21 6.57962 20.9078 6.74372 20.7437C6.90781 20.5796 7 20.3571 7 20.125C7 19.8929 6.90781 19.6704 6.74372 19.5063C6.57962 19.3422 6.35706 19.25 6.125 19.25Z" fill="#9C9C9C" />
                        </svg>
                        Log out
                    </div>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;

