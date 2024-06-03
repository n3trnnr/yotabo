import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./slices/projectsSlice";
import tasksSlice from "./slices/tasksSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        userSlice,
        projectsSlice,
        tasksSlice
    }
})

export default store