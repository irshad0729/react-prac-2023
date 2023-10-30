import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5,
    todoInfo: [],
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    updateToDo: (state, action) => {
      console.log("action .payload :", action.payload);
      state.todoInfo = [...state.todoInfo, action.payload];
    },
  },
});

export const { increament, decreament, updateToDo } = counterSlice.actions;
export default counterSlice.reducer;
