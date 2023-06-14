export interface IDeleteModalProps {
    page: number;
    show: boolean;
    name: string;
    surname: string;
    employeeId: string
    handleOpenDeleteModal: (name?: string, surname?: string) => void;
}