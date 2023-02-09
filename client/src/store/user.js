import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const userLogout = createAction("USER_LOGOUT");
export const addFavorites = createAction("ADD_FAVORITES");
export const removeFavorite = createAction("REMOVE_FAVORITE");

const initialState = {
  id: null,
  name: null,
  userName: null,
  email: null,
  movies: [],
};

const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
  [userLogout]: (state, action) => ({}),
  [addFavorites]: (state, action) => {
    return state.properties.push(action.payload);
  },
  [removeFavorite]: (state, action) => {
    return {
      ...state,
      properties: state.properties.filter(
        (fav) => fav.id !== action.payload.id
      ),
    };
  },
});

export default userReducer;
