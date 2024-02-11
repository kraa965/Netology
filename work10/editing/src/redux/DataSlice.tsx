import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { Data, IsRedact } from "../models/models";

interface DataState {
  data: Data[];
  isRedact: IsRedact;
}

const data: DataState = {
  data: [],
  isRedact: { id: "", redact: false },
};

const dataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    addData(state, action) {
      state.data.push({
        id: v4(),
        name: action.payload.name,
        price: action.payload.price,
      });
    },

    changeData(state, action) {
      const current = state.data.find((el) => el.id === action.payload.id);
      if (current) {
        current.name = action.payload.text;
        current.price = action.payload.price;
      }
    },

    setRedact(state, action) {
      state.isRedact.id = action.payload.id;
      state.isRedact.redact = true;
    },
    stopRedact(state) {
      state.isRedact.redact = false;
    },
    delData(state, action) {
      state.data = state.data.filter((el) => el.id != action.payload.id);
    },
  },
});

export const { addData, setRedact, delData, changeData, stopRedact } =
  dataSlice.actions;

export default dataSlice.reducer;
