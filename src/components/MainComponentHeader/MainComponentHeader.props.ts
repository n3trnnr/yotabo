import { ReactNode } from "react";

export interface IMainComponentHeader {
    type: 'info' | 'none';
    children: ReactNode;
    progressPercentage?: number
}