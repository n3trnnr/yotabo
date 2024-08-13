export interface IProjectFormData {
    title: string,
    description: string
}

export interface IProjectData {
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

export interface IProject {
    data: IProjectData,
    meta: {}
}

export interface IProjects {
    data: IProjectData[],
    meta: {
        pagination: {
            page: number,
            pageCount: number,
            pageSize: number,
            total: number,
        }
    }
}