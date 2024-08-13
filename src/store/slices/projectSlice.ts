import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PREFIX } from "../../constants/constants";
import { RootState } from "../../store/store";
import { IProject, IProjectFormData, IProjects } from "../../interfaces/store/projectSlice";

interface IProjectSlice {
    projects: IProjects | null,
    project: IProject | null
}

export const getProjectsData = createAsyncThunk<IProjects, void, { rejectValue: string, state: RootState }>(
    'project/getProjectsData',
    async (_, { rejectWithValue, getState }) => {
        const jwt = getState().user.jwt
        const response = await fetch(`${PREFIX}/api/projects?populate=*`, {
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

export const postProjectsData = createAsyncThunk<IProject, IProjectFormData, { rejectValue: string, state: RootState }>(
    'project/postProjectsData',
    async (ProjectDataClient, { rejectWithValue, getState }) => {
        const jwt = getState().user.jwt;
        const response = await fetch(`${PREFIX}/api/projects?populate=*`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify(
                ProjectDataClient
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
    projects: null,
    project: null
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProjectsData.fulfilled, (state, action) => {
                console.log('action', action.payload);

                state.projects = action.payload
            })

            .addCase(getProjectDataById.fulfilled, (state, action) => {
                // console.log('getProjectDataById - ', action.payload.data);
                state.project = action.payload
            })

            .addCase(postProjectsData.fulfilled, (state, action) => {
                // console.log('postProjectsData', action.payload);
                // state.projects = action.payload.data
            })
    },

})

export const projectActions = projectSlice.actions
export default projectSlice.reducer