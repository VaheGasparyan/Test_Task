export interface IDeleteModalProps {
    showDeleteModal: {
        show: boolean,
        taskId: string;
        name: string
    };
    page: number;
    handleDelete: (name?: string, taskId?: string) => void;
}