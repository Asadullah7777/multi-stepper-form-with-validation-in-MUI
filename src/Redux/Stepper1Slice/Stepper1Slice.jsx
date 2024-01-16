import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    form: [],
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mediaFile: "",
    notes: "",
  },
  reducers: {
    saveFormData: (state, action) => {
      console.log("kjfashjkaf", action.payload);
      state.form.push(action.payload);
    },
    update: (state, action) => {
      console.log("swchskcj");
      const allUser = [...state.form];
      const newData = allUser?.filter(
        (record) => record.id !== action.payload.id
      );
      state.todo = [...newData, action.payload];
    },
    deleted: (state, action) => {
      console.log(`action.payload = ${action.payload}`);

      state.form = state.form.filter((record) => record.id !== action.payload);
    },
    // getFormData: (state, action) => {
    //   state.form = action.payload.map((data) => ({ ...data }));
    // },

    getFormData: (state, action) => {
      state.form = [...action.payload];
    },
    // resetFormData: () => null,
  },
});

export const { saveFormData, getFormData, deleted, update } = formSlice.actions;
export default formSlice.reducer;
