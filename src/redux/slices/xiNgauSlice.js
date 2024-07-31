import { createSlice } from '@reduxjs/toolkit'
import KetQua from '../../components/BaiTap/BaiTapLacXiNgau/KetQua';

const initialState = {
    xiNgau: {
        xiNgau1: 2,
        xiNgau2: 3,
        xiNgau3: 6,
    },
    tongSoBanThang: 0,
    tongSoBanChoi: 0,
    banChon: "Tài"
}

const xiNgauSlice = createSlice({
    name: "xiNgau",
    initialState,
    reducers: {
        thayDoiBanChon: (state, action) => {
            console.log(action);
            state.banChon = action.payload;
        },
        ketQuaNguoiChoi: (state, action) => {
            console.log("hello");
            let xiNgau1 = Math.floor(Math.random() * 6) + 1;
            let xiNgau2 = Math.floor(Math.random() * 6) + 1;
            let xiNgau3 = Math.floor(Math.random() * 6) + 1;
            state.xiNgau = { ...state.xiNgau, xiNgau1, xiNgau2, xiNgau3 };
        }
    }
});

export const { thayDoiBanChon, ketQuaNguoiChoi } = xiNgauSlice.actions

export default xiNgauSlice.reducer