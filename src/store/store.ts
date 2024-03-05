import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./slices/projectsSlice";
import tasksSlice from "./slices/tasksSlice";

const store = configureStore({
    reducer: {
        projectsSlice,
        tasksSlice
    }
})

export default store