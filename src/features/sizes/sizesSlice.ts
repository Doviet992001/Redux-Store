import {  createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface SizesState {
    value: Array<{ text: string, active: boolean }>,
}

const initialState: SizesState = {
    value: [
        {
            text: "XS",
            active: false,
        },
        {
            text: "S",
            active: false,
        },
        {
            text: "M",
            active: false,
        },
        {
            text: "ML",
            active: false,
        },
        {
            text: "L",
            active: false,
        },
        {
            text: "XL",
            active: false,
        },
        {
            text: "XXL",
            active: false,
        },
    ],
}

export const sizesSlice = createSlice({
    name: 'sizes',
    initialState,
    reducers: {
        onActiveSizes: (state, action) => {
            const newValue:any = []
            state.value.forEach(item => {
                if(item.text === action.payload.text) {
                    newValue.push({...item, active: !item.active})
                } else {
                    newValue.push(item)
                }
            })
            return {value: newValue}
      
        }
    }
})

export const { onActiveSizes } = sizesSlice.actions;
export const selectSizes = (state: RootState) => state.size.value;



export default sizesSlice.reducer;