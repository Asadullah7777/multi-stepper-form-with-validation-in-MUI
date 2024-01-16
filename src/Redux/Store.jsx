import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Stepper1Slice/Stepper1Slice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
