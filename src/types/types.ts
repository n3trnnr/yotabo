interface IProject {
    id: number,
    title: string,
    description: string,
    isFavourite: boolean,
    progress: number,
    creationDate: Date
    isDeleted: boolean
}

interface ITask {
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

