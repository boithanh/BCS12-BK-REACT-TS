import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    hoten: "Cẩm Y Vệ",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        capNhatHoTen: (state, action) => {
            console.log(action);
            console.log(current(state));
            console.log(action.payload);
            state.hoten = action.payload;
        }
    }
});

export const { capNhatHoTen, banhboithanh } = userSlice.actions

export default userSlice.reducer