import { configureStore } from "@reduxjs/toolkit";
import musicReducers from "../reducers/MusicSlice";


 const store = configureStore({
    reducer : {
musics : musicReducers
    }
});

export default store;