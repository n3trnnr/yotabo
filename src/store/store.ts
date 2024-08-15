import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import taskSlice from "./slices/taskSlice";
import userSlice from "./slices/userSlice";
import { saveState } from "./localStorage/localStorage";
import { TOKEN_PRESISTENT_STATE_NAME, USER_PRESISTENT_STATE_NAME } from "../constants/constants";

const store = configureStore({
    reducer: {
        user: userSlice,
        project: projectSlice,
        tasks: taskSlice
    }
})

store.subscribe(() => {
    saveState(TOKEN_PRESISTENT_STATE_NAME, store.getState().user.jwt)
    saveState(USER_PRESISTENT_STATE_NAME, store.getState().user.currentUser)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch