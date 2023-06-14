import { Routes, Route } from "react-router-dom";

import Employees from "pages/employees";
import Tasks from 'pages/tasks';
import Header from "components/header";

const Main = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Employees />} />
                <Route path='tasks' element={<Tasks />} />
            </Routes>
        </>
    );
};

export default Main;