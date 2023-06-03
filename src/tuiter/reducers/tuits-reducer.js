import { createSlice } from "@reduxjs/toolkit";
import tuits from "../tuit-summary-list/tuits.json";

const tuitsSlice = createSlice({
    name: "tuites",
    initialState: tuits
});

export default tuitsSlice.reducer;