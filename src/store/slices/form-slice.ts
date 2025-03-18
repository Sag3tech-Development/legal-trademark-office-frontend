import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  formId: string | null;
}

const initialState: FormState = {
  formId: null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormId: (state, action: PayloadAction<string>) => {
      state.formId = action.payload;
    },
    clearFormId: (state) => {
      state.formId = null;
    },
  },
});

export const { setFormId, clearFormId } = formSlice.actions;

export default formSlice.reducer;
