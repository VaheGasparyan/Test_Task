export const getNewEmployeeDataFromForm = (formData: HTMLFormElement) => {
    const [name, surname, email, position] = new FormData(formData).getAll('form_data');

    return {
        name,
        surname,
        email,
        position
    }
}