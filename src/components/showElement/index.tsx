import {FC} from "react";
import {IShowElementProps} from "./types";

const ShowElement:FC<IShowElementProps> = ({ isShow, fallback, children }) => {
    return (
        <>
            {
                isShow ? fallback : children
            }
        </>
    )
};

export default ShowElement;