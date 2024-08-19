import { UseFormRegister } from "react-hook-form";
import { IFile, IModalWindowInputs } from "../ModalWindow";

export interface IAdvancedSettings {
    register: UseFormRegister<IModalWindowInputs>,
    files?: IFile[],
    handleDeleteFile: (id: string) => void
}