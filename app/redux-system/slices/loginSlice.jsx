import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: localStorage.getItem("userToken"), 
  error: null, 
  isLoading: false, 
  userData: JSON.parse(localStorage.getItem("userData")), 
};

// Create the login slice
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userToken = action.payload.token; 
      state.userData = action.payload.userData; 
      localStorage.setItem("userToken", action.payload.token);
      localStorage.setItem("userData", JSON.stringify(action.payload.userData));
      state.error = null; 
      state.isLoading = false; 
    },
    setLogout: (state) => {
      state.userToken = null; 
      state.userData = null; 
      localStorage.removeItem("userToken");
      localStorage.removeItem("userData");
      state.error = null; 
      state.isLoading = false; 
    },
    setLoginError: (state, action) => {
      state.error = action.payload; 
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload; 
    },
  },
});

export const { setLogin, setLogout, setLoginError, setLoading } = loginSlice.actions;
export const login = loginSlice.reducer;
