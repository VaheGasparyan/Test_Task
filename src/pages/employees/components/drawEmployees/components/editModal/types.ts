export interface IEditModalProps {
    editModal: boolean;
    employeeId: string;
    handleEdit: (id?: string) => void;
    page: number
}