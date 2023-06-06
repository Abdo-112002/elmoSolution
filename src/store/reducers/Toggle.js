
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    toggleLang : "en" ,
    toggleNav : false,
}

const toggleSlice = createSlice({
    name: "toggle",
    initialState: INITIAL_STATE,
    reducers: {
        toggleNavFun: (state) => {
            state.toggleNav = !state.toggleNav;
        },
        toggleLangFun: (state,actions) => {
            state.toggleLang = actions.payload;
        },
    },
});

export const { toggleNavFun , toggleLangFun } = toggleSlice.actions;

export default toggleSlice.reducer;