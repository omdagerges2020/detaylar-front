import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClollections = createAsyncThunk(
  "getcollections",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    const options = {
      method: "GET",
      url: `http://192.168.1.117/detaylar/api/getCategories`,
      headers: {
        "token": "RuQChqz2FqJkP6wMAQiVlLx5OTRIXAPPWEB",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios(options);
      console.log(response.data);
      
  
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getCollectionsSlice = createSlice({
  name: "getcollectionsslice",
  initialState: {
    loading: false,
    erorr: null,
    collections: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getClollections.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getClollections.fulfilled, (state, action) => {
      state.loading = false;
      state.collections = action.payload;
    });
    builder.addCase(getClollections.rejected, (state, action) => {
      state.loading = false;
      state.erorr = action.payload.message;
    });
  },
});

export const collectionData = getCollectionsSlice.reducer;
