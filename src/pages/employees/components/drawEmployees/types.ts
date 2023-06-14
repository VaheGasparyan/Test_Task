import {NextOrPrev} from "globalTypes/enums";

export interface IDrawEmployeesProps {
    handleNextOrPrev: (nexOrPrev: NextOrPrev) => void;
    page: number
}