import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageData: [],
  imagesOutput: [{}],
  isLogin: false,
};

const droppingData = createSlice({
  name: "droppingData",
  initialState,
  reducers: {
    dropDataList(state, action) {
      state.imageData = action.payload;
    },
    dropOutData(state, action) {
      state.imagesOutput = action.payload;
    },
    setLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { dropDataList, dropOutData, setLogin } = droppingData.actions;

export default droppingData.reducer;
