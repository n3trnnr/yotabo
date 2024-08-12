import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../interfaces/global";

interface ITaskSlice {
    tasks: ITask[]
}

const initialState: ITaskSlice = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {

    }
})

export default taskSlice.reducer