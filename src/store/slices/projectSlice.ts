import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProject, IProjectServer } from './../../interfaces/global';
import { PREFIX } from "../../constants/constants";
import { RootState } from "../../store/store";

interface IProjectSlice {
    projects: IProject[],
    project: IProject | null
}

interface IProjectDataClient {
    title: string,
    description: string
}

export const getProjectsData = createAsyncThunk<IProjectServer, void, { rejectValue: string, state: RootState }>(
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

        const data = await response.json() as IProjectServer
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

export const postProjectsData = createAsyncThunk<IProjectServer, IProjectDataClient, { rejectValue: string, state: RootState }>(
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

        const data = await response.json() as IProjectServer
        return data
    }
)

const initialState: IProjectSlice = {
    projects: [],
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

                state.projects = action.payload.data
            })

            .addCase(postProjectsData.fulfilled, (state, action) => {
                console.log('postProjectsData', action.payload);
                // state.projects = action.payload.data
            })

            .addCase(getProjectDataById.fulfilled, (state, action) => {
                // console.log('getProjectDataById - ', action.payload);
                state.project = action.payload
            })
    },

})

export const projectActions = projectSlice.actions
export default projectSlice.reducer