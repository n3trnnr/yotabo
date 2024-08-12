import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProject, IProjectServer } from './../../interfaces/global';
import { PREFIX } from "../../constants/constants";
import { RootState } from "../../store/store";

interface IProjectSlice {
    projects: IProject[]
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
    projects: []
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {

    },
    extraReducers: (buldler) => {
        buldler
            .addCase(getProjectsData.fulfilled, (state, action) => {
                console.log('action', action.payload);

                state.projects = action.payload.data
            })
            .addCase(postProjectsData.fulfilled, (state, action) => {
                console.log('action', action.payload);

                // state.projects = action.payload.data
            })
    }

})

export const projectActions = projectSlice.actions
export default projectSlice.reducer