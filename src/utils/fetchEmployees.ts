import { defaultLimitCount } from "globalTypes/constants";

const ROCKY_TEMPLE = 'https://rocky-temple-83495.herokuapp.com';

export const getEmployees = async (page: number) => {
    const employeesRes = await fetch(`${ROCKY_TEMPLE}/employees?_page=${page}&_limit=${defaultLimitCount}`);
    return employeesRes.json();
}

