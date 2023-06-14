import { Routes, Route } from "react-router-dom";

import Employees from "pages/employees";
import Tasks from 'pages/tasks';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Employees />} />
            <Route path='tasks' element={<Tasks />} />
        </Routes>
    );
};

export default Main;