export interface IModalWindow {
    type: "simple" | "advanced";
    modalWindowTitle: string;
    handleShowModal: (state: boolean) => void;
}