import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PREFIX } from "../../constants/constants";
import { RootState } from "../../store/store";
import { IProject, IProjectFormData, IProjects } from "../../interfaces/store/projectSlice";

interface IProjectSlice {
    project: IProject | null,
    projects: IProjects | null,
    error: string | null,
    status: string | null
}

export const getProjectsData = createAsyncThunk<IProjects, void, { rejectValue: string, state: RootState }>(
    'project/getProjectsData',
    async (_, { rejectWithValue, getState }) => {
        const jwt = getState().user.jwt
        const response = await fetch(`${PREFIX}/api/projects`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        if (!response.ok) {
            const errorData = await response.json()
            return rejectWithValue(`${response.status.toString()} - ${response.statusText} - ${errorData?.error?.message}`)
        }

        const data = await response.json() as IProjects
        return data
    }
)

export const getProjectDataById = createAsyncThunk<IProject, number, { rejectValue: string, state: RootState }>(
    'project/getProjectDataById',
    async (id, { rejectWithValue, getState }) => {
        const jwt = getState().user.jwt
        const response = await fetch(`${PREFIX}/api/projects/${id}?populate=*`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        if (!response.ok) {
            const errorData = await response.json()
            return rejectWithValue(`${response.status.toString()} - ${response.statusText} - ${errorData?.error?.message}`)
        }

        const data = await response.json() as IProject
        return data
    }
)

export const postProjectData = createAsyncThunk<IProject, IProjectFormData, { rejectValue: string, state: RootState }>(
    'project/postProjectData',
    async (projectDataClient, { rejectWithValue, getState }) => {
        const jwt = getState().user.jwt;
        const userId = getState().user.currentUser?.id

        projectDataClient.user = userId

        const response = await fetch(`${PREFIX}/api/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify(
                {
                    data: { ...projectDataClient }
                }
            )
        })

        if (!response.ok) {
            const errorData = await response.json()
            return rejectWithValue(`${response.status.toString()} - ${response.statusText} - ${errorData?.error?.message}`)
        }

        const data = await response.json() as IProject
        return data
    }
)

const initialState: IProjectSlice = {
    project: null,
    projects: null,
    error: null,
    status: null
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProjectsData.fulfilled, (state, action) => {
                // console.log('action', action.payload);

                state.projects = action.payload
            })

            .addCase(getProjectDataById.fulfilled, (state, action) => {
                // console.log('getProjectDataById - ', action.payload.data);
                state.project = action.payload
            })

            .addCase(postProjectData.fulfilled, (state, action) => {
                // console.log('postProjectData', action.payload);
                if (state.projects) {
                    state.projects.data.push(action.payload.data)
                }
            })
    },

})

export const projectActions = projectSlice.actions
export default projectSlice.reducer