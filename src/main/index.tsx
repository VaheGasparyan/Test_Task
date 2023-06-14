import { Routes, Route } from "react-router-dom";

import Employees from "pages/employees";
import Tasks from 'pages/tasks';
import Header from "components/header";
import Employee from "pages/employee";

const Main = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Employees />} />
                <Route path='tasks' element={<Tasks />} />
                <Route path='employee/:id' element={<Employee />} />
            </Routes>
        </>
    );
};

export default Main;