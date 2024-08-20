import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
import { IModalWindowInputs } from "../ModalWindow/ModalWindow";

export interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode,
    register: UseFormRegister<IModalWindowInputs>,
    inputName: keyof IModalWindowInputs,
    labelClassName?: string
}