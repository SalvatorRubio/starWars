import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "persons",
  initialState: {
    favoritePersons: [],
  },
  reducers: {
    setPersonToFavorite(state, action) {
      if (
        !state.favoritePersons.find((person) => person.id === action.payload.id)
      )
        state.favoritePersons.push(action.payload);
    },
    removePersonFromFavorite(state, action) {
      state.favoritePersons = state.favoritePersons.filter(
        (person) => person.id !== action.payload
      );
    },
  },
});

export const { setPersonToFavorite, removePersonFromFavorite } =
  personSlice.actions;

export default personSlice.reducer;
