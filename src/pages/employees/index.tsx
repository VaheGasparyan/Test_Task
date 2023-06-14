import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {setEmployees} from "features/employeesSlice";
import {getEmployees} from "utils/fetchEmployees";

import {statusTypes} from "globalTypes/statusTypes";
import {defaultPageCount} from "globalTypes/constants";
import {NextOrPrev} from "globalTypes/enums";


import ShowElement from "components/showElement";
import Loading from "components/loading";
import DrawEmployees from "./components/drawEmployees";

const Employees = () => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.employeesSlice);
    const [page, setPage] = useState(defaultPageCount);
    const isShow = status === statusTypes.loading;

    useEffect(() => {
        const employeesData = async () => {
            const employees = await getEmployees(page);
            dispatch(setEmployees(employees));
        }

        employeesData()
    }, [page]);

    const handleNextOrPrev = (nextOrPrev: NextOrPrev) => {
        setPage(prevState => nextOrPrev === NextOrPrev.NEXT ? prevState + defaultPageCount : prevState - defaultPageCount);
    }

    return (
        <ShowElement isShow={isShow} fallback={<Loading />}>
            <DrawEmployees handleNextOrPrev={handleNextOrPrev} page={page} />
        </ShowElement>
    )
};

export default Employees;