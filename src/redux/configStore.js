import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './slices/pokemonSlice';
import dienThoaiSlice from './slices/dienThoaiSlice';

export const store = configureStore({
    reducer: {
        hoTen: () => {
            return "Bối Thạnh";
        }, pokemonSlice, dienThoaiSlice
    },
})