import { configureStore } from "@reduxjs/toolkit";

// Reducers
import toggleMode from './reducers/Toggle';

// Slices


export default configureStore({
    reducer: {
        // Reducers
        toggleMode
        // Slices
    },
});
