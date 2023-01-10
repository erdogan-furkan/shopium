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
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setActiveLang: (state, action: PayloadAction<string>) => {
      state.activeLang = action.payload;
    },
  },
});

export const { setDarkMode, setActiveLang } = themeSlice.actions;
export default themeSlice.reducer;
