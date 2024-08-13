import { createSlice, createAsyncThunk, PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { getState } from "../localStorage/localStorage";
import { PREFIX, TOKEN_PRESISTENT_STATE_NAME } from "../../constants/constants";

interface IUserDataClient { // Импортировать из AuthModalWindow
    username?: string;
    password: string;
    email?: string;
    identifier?: string;
}

interface IUserDataServer {
    jwt: string;
    user: IUser;
}

interface IUser {
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    email: string;
    id: number;
    provider: string;
    updatedAt: string;
    username: string;
}

interface IUserSlice {
    currentUser: IUser | {}
    jwt: null | string,
    loadingStatus: boolean,
    error: null | string,
}

const initialState: IUserSlice = {
    currentUser: {},
    jwt: getState(TOKEN_PRESISTENT_STATE_NAME) ?? null,
    loadingStatus: false,
    error: null,
}

export const registerUser = createAsyncThunk<IUserDataServer, IUserDataClient, { rejectValue: string }>(
    'user/registerUser',
    async (newUser, { rejectWithValue }) => {
        const response = await fetch(`${PREFIX}/api/auth/local/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        if (!response.ok) {
            const errorData = await response.json()
            return rejectWithValue(`${response.status.toString()} - ${response.statusText} - ${errorData?.error?.message}`)
        }

        const data = await response.json() as IUserDataServer

        return data
    }
)

export const loginUser = createAsyncThunk<IUserDataServer, IUserDataClient, { rejectValue: string }>(
    'user/loginUser',
    async (loginUser, { rejectWithValue }) => {
        const response = await fetch(`${PREFIX}/api/auth/local?populate=*`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(loginUser),
        })

        if (!response.ok) {
            const errorData = await response.json()
            return rejectWithValue(`${response.status.toString()} - ${response.statusText} - ${errorData?.error?.message}`)
        }

        const data = await response.json() as IUserDataServer

        return data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.jwt = null
            // state.currentUser = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                registerUser.fulfilled,
                (state, action) => {
                    console.log('action', action.payload);

                    state.currentUser = action.payload.user
                    state.jwt = action.payload.jwt
                    state.loadingStatus = true
                }
            )

            .addCase(
                loginUser.fulfilled,
                (state, action) => {
                    console.log('action', action.payload);

                    state.currentUser = action.payload.user
                    state.jwt = action.payload.jwt
                    state.loadingStatus = true
                }
            )

            .addMatcher(isRejected, (state, action: PayloadAction<string>) => {
                console.log('payload - ', action.payload);

                state.error = action.payload
                state.loadingStatus = false
            })
            .addMatcher(isPending, (state) => {
                state.loadingStatus = true;
            })
    }
})

const isRejected = (action: UnknownAction) => {
    return action.type.endsWith('rejected')
}

const isPending = (action: UnknownAction) => {
    return action.type.endsWith('pending')
}

export default userSlice.reducer

export const userActions = userSlice.actions