import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./slices/projectsSlice";
import tasksSlice from "./slices/tasksSlice";
import userSlice from "./slices/userSlice";
import { saveState } from "./localStorage/localStorage";
import { TOKEN_PRESISTENT_STATE_NAME } from "../constants/constants";

const store = configureStore({
    reducer: {
        user: userSlice,
        projects: projectsSlice,
        tasks: tasksSlice
    }
})

store.subscribe(() => {
    saveState(TOKEN_PRESISTENT_STATE_NAME, store.getState().user.jwt)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch