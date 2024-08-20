import { IModalWindowInputs } from './../../components/ModalWindow/ModalWindow';

export interface ITaskFormData extends IModalWindowInputs {
    // board?: 'to_do' | 'in_progress' | 'done',
    // project?: string,
    board?: 1 | 2 | 3,
    project?: number
}
export interface ITaskData {
    id: number,
    attributes: {
        // phase: 'to_do' | 'in_progress' | 'done'
        title: string,
        description: string,
        priority: 'low' | 'med' | 'high',
        creationDate: Date,
        deadlineDate: Date,
        isOverdue: boolean,
        file: File
    }
}

export interface ITask {
    data: ITaskData,
    meta: {}
}

export interface ITasks {
    data: ITaskData[],
    meta: {
        pagination: {
            page: number,
            pageCount: number,
            pageSize: number,
            total: number,
        }
    }
}