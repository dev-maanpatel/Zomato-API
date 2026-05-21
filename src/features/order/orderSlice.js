import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  fetchOrders,
  changeOrderStatus,
} from "./orderAPI";

export const getOrders =
  createAsyncThunk(
    "orders/getOrders",

    async (
      _,
      thunkAPI
    ) => {
      try {
        return await fetchOrders();
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const updateOrderStatus =
  createAsyncThunk(
    "orders/updateOrderStatus",

    async (
      {
        id,
        status,
      },
      thunkAPI
    ) => {
      try {
        return await changeOrderStatus(
          id,
          status
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

const orderSlice =
  createSlice({
    name: "orders",

    initialState: {
      orders: [],

      loading: false,

      error: null,
    },

    reducers: {},

    extraReducers: (
      builder
    ) => {
      builder

        .addCase(
          getOrders.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          getOrders.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.orders =
              action.payload;
          }
        )

        .addCase(
          getOrders.rejected,
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
          updateOrderStatus.fulfilled,
          (
            state,
            action
          ) => {
            const updatedIndex =
              state.orders.findIndex(
                (
                  order
                ) =>
                  order._id ===
                  action.payload._id
              );

            if (
              updatedIndex !==
              -1
            ) {
              state.orders[
                updatedIndex
              ] =
                action.payload;
            }
          }
        );
    },
  });

export default orderSlice.reducer;