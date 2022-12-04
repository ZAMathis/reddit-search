import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// create store here

export const store = configureStore({
    reducer: {
        // add reducers here
    }
}, thunk)
