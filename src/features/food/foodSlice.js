import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  fetchFoods,
  createFood,
  editFood,
  removeFood,
} from "./foodAPI";

export const getFoods =
  createAsyncThunk(
    "foods/getFoods",

    async (
      _,
      thunkAPI
    ) => {
      try {
        return await fetchFoods();
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const addFood =
  createAsyncThunk(
    "foods/addFood",

    async (
      formData,
      thunkAPI
    ) => {
      try {
        return await createFood(
          formData
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const updateFood =
  createAsyncThunk(
    "foods/updateFood",

    async (
      {
        id,
        formData,
      },
      thunkAPI
    ) => {
      try {
        return await editFood(
          id,
          formData
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const deleteFood =
  createAsyncThunk(
    "foods/deleteFood",

    async (
      id,
      thunkAPI
    ) => {
      try {
        return await removeFood(
          id
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

const foodSlice =
  createSlice({
    name: "foods",

    initialState: {
      foods: [],

      loading: false,

      error: null,
    },

    reducers: {},

    extraReducers: (
      builder
    ) => {
      builder

        .addCase(
          getFoods.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          getFoods.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.foods =
              action.payload;
          }
        )

        .addCase(
          getFoods.rejected,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.error =
              action.payload;
          }
        )

        .addCase(
          addFood.fulfilled,
          (
            state,
            action
          ) => {
            state.foods.unshift(
              action.payload
            );
          }
        )

        .addCase(
          updateFood.fulfilled,
          (
            state,
            action
          ) => {
            const updatedIndex =
              state.foods.findIndex(
                (
                  food
                ) =>
                  food._id ===
                  action.payload._id
              );

            if (
              updatedIndex !==
              -1
            ) {
              state.foods[
                updatedIndex
              ] =
                action.payload;
            }
          }
        )

        .addCase(
          deleteFood.fulfilled,
          (
            state,
            action
          ) => {
            state.foods =
              state.foods.filter(
                (
                  food
                ) =>
                  food._id !==
                  action.payload
              );
          }
        );
    },
  });

export default foodSlice.reducer;