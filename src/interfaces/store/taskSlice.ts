

export interface ITask {
    id: number,
    phase: 'toDo' | 'inProgress' | 'done'
    title: string,
    description: string,
    priority: 'low' | 'med' | 'high',
    creationDate: Date,
    deadlineDate: Date,
    isOverdue: boolean,
    cover: string,
    files: File
}