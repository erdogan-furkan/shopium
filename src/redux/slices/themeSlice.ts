import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
  activeLang: string;
}

export const initialState: ThemeState = {
  darkMode: false,
  activeLang: "en",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setActiveLang: (state, action: PayloadAction<string>) => {
      state.activeLang = action.payload;
    },
  },
});

export const { toggleDarkMode, setActiveLang } = themeSlice.actions;
export default themeSlice.reducer;
