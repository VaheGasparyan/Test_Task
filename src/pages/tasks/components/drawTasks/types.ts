import {NextOrPrev} from "globalTypes/enums";

export interface IDrawTasksProps {
    page: number;
    addPage: (nextOrPrev: NextOrPrev) => void;
}