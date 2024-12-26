// // redux/registerSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// // Initial state for the register slice
// const initialState = {
//   user: null,
//   status: 'idle', // Could be 'idle', 'loading', 'succeeded', or 'failed'
//   error: null,
// };

// // Create the slice
// const registerSlice = createSlice({
//   name: 'register',
//   initialState,
//   reducers: {
//     registerStart(state) {
//       state.status = 'loading';
//     },
//     registerSuccess(state, action) {
//       state.status = 'succeeded';
//       state.user = action.payload;
//     },
//     registerFailure(state, action) {
//       state.status = 'failed';
//       state.error = action.payload;
//     },
//     resetRegister(state) {
//       state.status = 'idle';
//       state.error = null;
//     }
//   }
// });

// // Export actions
// export const { registerStart, registerSuccess, registerFailure, resetRegister } = registerSlice.actions;

// // Export the reducer
// export const register =  registerSlice.reducer;


