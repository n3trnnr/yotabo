import React from "react";
import styles from './Header.module.scss'

interface IHeader {
    children: React.ReactNode,
}

const Header = ({ children }: IHeader) => {

    return (
        <header className={styles.header}>
            {
                children ?
                    <div>
                        {children}
                    </div>
                    :
                    <form className={styles["search-form"]} action="">
                        <input className={styles["input-search"]} type="text" placeholder="Search" />
                        <button className={styles["btn-send-search-form"]}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.7153 13.9457C9.64153 16.4073 5.14231 16.2134 2.293 13.3642C-0.764332 10.3069 -0.764332 5.35017 2.29299 2.29293C5.35032 -0.76431 10.3072 -0.76431 13.3646 2.29293C16.2141 5.14237 16.4078 9.6419 13.9456 12.7157L20.7452 19.5151C21.0849 19.8548 21.0849 20.4055 20.7452 20.7452C20.4055 21.0849 19.8547 21.0849 19.515 20.7452L12.7153 13.9457ZM12.1251 12.1433C12.128 12.1403 12.131 12.1373 12.134 12.1343C12.137 12.1312 12.1401 12.1282 12.1431 12.1253C14.5123 9.74673 14.5094 5.898 12.1344 3.52307C9.75646 1.14522 5.90109 1.14521 3.52317 3.52307C1.14525 5.90092 1.14525 9.75618 3.52317 12.134C5.898 14.5088 9.74644 14.5119 12.1251 12.1433Z" fill="#464646" />
                            </svg>
                        </button>
                    </form>
            }
            <nav className={styles["header-nav"]}>
                <ul className={styles["header-nav-items-list"]}>
                    <li className={styles["header-nav-item"]}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 14.875C8.085 14.875 6.125 12.915 6.125 10.5C6.125 8.085 8.085 6.125 10.5 6.125C12.915 6.125 14.875 8.085 14.875 10.5C14.875 12.915 12.915 14.875 10.5 14.875ZM10.5 7.875C9.05625 7.875 7.875 9.05625 7.875 10.5C7.875 11.9438 9.05625 13.125 10.5 13.125C11.9438 13.125 13.125 11.9438 13.125 10.5C13.125 9.05625 11.9438 7.875 10.5 7.875ZM11.375 3.5V0.875C11.375 0.39375 10.9812 0 10.5 0C10.0188 0 9.625 0.39375 9.625 0.875V3.5C9.625 3.98125 10.0188 4.375 10.5 4.375C10.9812 4.375 11.375 3.98125 11.375 3.5ZM11.375 20.125V17.5C11.375 17.0187 10.9812 16.625 10.5 16.625C10.0188 16.625 9.625 17.0187 9.625 17.5V20.125C9.625 20.6063 10.0188 21 10.5 21C10.9812 21 11.375 20.6063 11.375 20.125ZM4.375 10.5C4.375 10.0188 3.98125 9.625 3.5 9.625H0.875C0.39375 9.625 0 10.0188 0 10.5C0 10.9812 0.39375 11.375 0.875 11.375H3.5C3.98125 11.375 4.375 10.9812 4.375 10.5ZM21 10.5C21 10.0188 20.6063 9.625 20.125 9.625H17.5C17.0187 9.625 16.625 10.0188 16.625 10.5C16.625 10.9812 17.0187 11.375 17.5 11.375H20.125C20.6063 11.375 21 10.9812 21 10.5ZM5.87125 5.87125C6.2125 5.53 6.2125 4.97875 5.87125 4.6375L4.12125 2.8875C3.78 2.54625 3.22875 2.54625 2.8875 2.8875C2.54625 3.22875 2.54625 3.78 2.8875 4.12125L4.6375 5.87125C4.8125 6.04625 5.03125 6.125 5.25875 6.125C5.48625 6.125 5.705 6.0375 5.88 5.87125H5.87125ZM18.1213 18.1213C18.4625 17.78 18.4625 17.2288 18.1213 16.8875L16.3713 15.1375C16.03 14.7962 15.4787 14.7962 15.1375 15.1375C14.7962 15.4787 14.7962 16.03 15.1375 16.3713L16.8875 18.1213C17.0625 18.2962 17.2812 18.375 17.5088 18.375C17.7362 18.375 17.955 18.2875 18.13 18.1213H18.1213ZM4.12125 18.1213L5.87125 16.3713C6.2125 16.03 6.2125 15.4787 5.87125 15.1375C5.53 14.7962 4.97875 14.7962 4.6375 15.1375L2.8875 16.8875C2.54625 17.2288 2.54625 17.78 2.8875 18.1213C3.0625 18.2962 3.28125 18.375 3.50875 18.375C3.73625 18.375 3.955 18.2875 4.13 18.1213H4.12125ZM16.3713 5.87125L18.1213 4.12125C18.4625 3.78 18.4625 3.22875 18.1213 2.8875C17.78 2.54625 17.2288 2.54625 16.8875 2.8875L15.1375 4.6375C14.7962 4.97875 14.7962 5.53 15.1375 5.87125C15.3125 6.04625 15.5312 6.125 15.7587 6.125C15.9862 6.125 16.205 6.0375 16.38 5.87125H16.3713Z" fill="white" />
                        </svg>
                    </li>
                    <li className={styles["header-nav-item"]}>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7358 11.9542L18.0733 5.97272C17.586 4.22039 16.5269 2.68122 15.0645 1.59988C13.602 0.518544 11.82 -0.0429136 10.0018 0.00475648C8.18362 0.0524266 6.43353 0.706489 5.02972 1.86298C3.62592 3.01947 2.64897 4.61201 2.25417 6.38747L0.967042 12.1756C0.824868 12.8152 0.828155 13.4785 0.976661 14.1166C1.12517 14.7548 1.4151 15.3514 1.82505 15.8625C2.235 16.3735 2.75451 16.786 3.34521 17.0694C3.93592 17.3529 4.58274 17.5 5.23792 17.5H6.21267C6.41349 18.489 6.95006 19.3781 7.73144 20.0168C8.51283 20.6555 9.49098 21.0044 10.5002 21.0044C11.5094 21.0044 12.4875 20.6555 13.2689 20.0168C14.0503 19.3781 14.5868 18.489 14.7877 17.5H15.5209C16.1954 17.5 16.8607 17.3441 17.465 17.0445C18.0692 16.7448 18.596 16.3095 19.0041 15.7726C19.4123 15.2357 19.6908 14.6116 19.8179 13.9493C19.9449 13.2869 19.9163 12.6041 19.7358 11.9542ZM10.5002 19.25C9.95919 19.2477 9.43212 19.0784 8.99106 18.7651C8.54999 18.4519 8.21649 18.01 8.03617 17.5H12.9642C12.7838 18.01 12.4503 18.4519 12.0093 18.7651C11.5682 19.0784 11.0411 19.2477 10.5002 19.25ZM17.6104 14.7131C17.3666 15.0366 17.0507 15.2987 16.6878 15.4787C16.3249 15.6587 15.9251 15.7516 15.52 15.75H5.23792C4.84485 15.7499 4.45682 15.6616 4.10247 15.4915C3.74811 15.3214 3.43647 15.0739 3.19056 14.7673C2.94465 14.4606 2.77073 14.1027 2.68166 13.7198C2.59258 13.337 2.59062 12.939 2.67592 12.5553L3.96217 6.76635C4.27223 5.37178 5.03956 4.12088 6.14219 3.21249C7.24482 2.30411 8.61946 1.79037 10.0476 1.75296C11.4757 1.71555 12.8754 2.1566 14.0241 3.00601C15.1727 3.85542 16.0045 5.06443 16.3872 6.44085L18.0497 12.4223C18.1595 12.812 18.177 13.222 18.1008 13.6196C18.0245 14.0173 17.8566 14.3917 17.6104 14.7131Z" fill="white" />
                        </svg>
                    </li>
                    <li className={styles["header-nav-item"]}>
                        <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.3351 5.86662C14.3351 9.10667 11.7232 11.7332 8.50129 11.7332C5.27938 11.7332 2.66751 9.10667 2.66751 5.86662C2.66751 2.62658 5.27938 0 8.50129 0C11.7232 0 14.3351 2.62658 14.3351 5.86662ZM12.3351 5.86662C12.3351 8.01271 10.608 9.73325 8.50129 9.73325C6.39453 9.73325 4.66751 8.01271 4.66751 5.86662C4.66751 3.72054 6.39453 2 8.50129 2C10.608 2 12.3351 3.72054 12.3351 5.86662Z" fill="white" />
                            <path d="M8.50057 12.6188C3.80583 12.6188 0 16.4247 0 21.1194V21.9997C0 22.552 0.447715 22.9997 1 22.9997C1.55228 22.9997 2 22.552 2 21.9997V21.1194C2 17.5292 4.9104 14.6188 8.50057 14.6188C12.0907 14.6188 15.0011 17.5292 15.0011 21.1194V21.9997C15.0011 22.552 15.4488 22.9997 16.0011 22.9997C16.5534 22.9997 17.0011 22.552 17.0011 21.9997V21.1194C17.0011 16.4247 13.1953 12.6188 8.50057 12.6188Z" fill="white" />
                        </svg>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;