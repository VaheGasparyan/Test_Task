import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";

import {getTasks} from "utils/fetchTasks";
import {defaultPageCount} from "globalTypes/constants";
import {setTasks} from "features/tasksSlice";
import {statusTypes} from "globalTypes/statusTypes";
import {NextOrPrev} from "globalTypes/enums";


import ShowElement from "components/showElement";
import Loading from "components/loading";
import DrawTasks from "./components/drawTasks";

import './tasks.css';

const Tasks = () => {
    const [page, setPage] = useState(defaultPageCount);
    const dispatch = useAppDispatch();
    const {status} = useAppSelector(state => state.tasksSlice);
    const isShow = status === statusTypes.loading;

    useEffect(() => {
        const fetchTasksData = async () => {
            const tasksRes = await getTasks(page);
            dispatch(setTasks(tasksRes));
        };

        fetchTasksData()
    }, [page]);

    const addPage = (nextOrPrev: NextOrPrev) => {
        setPage(prevState => nextOrPrev === NextOrPrev.NEXT ? prevState + defaultPageCount : prevState - defaultPageCount);
    }

    return (
        <ShowElement isShow={isShow} fallback={<Loading />}>
            <DrawTasks page={page} addPage={addPage} />
        </ShowElement>
    );
};

export default Tasks;