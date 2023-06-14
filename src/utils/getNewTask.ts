export const getNewTask = (formData: HTMLFormElement) => {
    const [name, startDate, endDate, description, employeeId] = new FormData(formData).getAll('form_data');

    return {
        name,
        startDate,
        endDate,
        description,
        employeeId
    }
}