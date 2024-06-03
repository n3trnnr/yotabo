import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: 'admin',
    password: 'admin123',
    email: 'admin@ya.ru'
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,

    reducers: {

    }
})

export default userSlice.reducer