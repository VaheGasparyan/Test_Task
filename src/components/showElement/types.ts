import {ReactNode} from "react";

export interface IShowElementProps {
    isShow: boolean;
    fallback?: ReactNode;
    children: ReactNode;
}