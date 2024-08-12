export interface IProject {
    id: number,
    attributes: {
        title: string,
        description: string,
        isFavorites: boolean,
        progress: number,
        createdAt: string
        isDeleted: boolean
    }
}

export interface IProjectServer {
    data: IProject[],
    meta: any
}

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

export interface ISidebarPages {
    key: string;
    title: string;
    icon: JSX.Element;
}