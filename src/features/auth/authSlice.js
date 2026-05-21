import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  registerRequest,
  loginRequest,
  profileRequest,
} from "./authAPI";

export const registerUser =
  createAsyncThunk(
    "auth/registerUser",

    async (
      formData,
      thunkAPI
    ) => {
      try {
        const response =
          await registerRequest(
            formData
          );

        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const loginUser =
  createAsyncThunk(
    "auth/loginUser",

    async (
      loginData,
      thunkAPI
    ) => {
      try {
        const response =
          await loginRequest(
            loginData
          );

        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const getProfile =
  createAsyncThunk(
    "auth/getProfile",

    async (
      _,
      thunkAPI
    ) => {
      try {
        const response =
          await profileRequest();

        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const updateProfile =
  createAsyncThunk(
    "auth/updateProfile",

    async (
      formData,
      thunkAPI
    ) => {
      try {
        const currentUser =
          thunkAPI.getState()
            .auth.user;

        const updatedUser = {
          ...currentUser,

          name:
            formData.get(
              "name"
            ),

          phone:
            formData.get(
              "phone"
            ),

          address:
            formData.get(
              "address"
            ),
        };

        if (
          formData.get(
            "image"
          )
        ) {
          updatedUser.image =
            URL.createObjectURL(
              formData.get(
                "image"
              )
            );
        }

        return updatedUser;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

const initialState = {
  user: null,

  loading: false,

  error: null,
};

const authSlice =
  createSlice({
    name: "auth",

    initialState,

    reducers: {
      logout: (
        state
      ) => {
        state.user = null;

        state.error = null;
      },

      clearError: (
        state
      ) => {
        state.error = null;
      },
    },

    extraReducers: (
      builder
    ) => {
      builder

        .addCase(
          registerUser.pending,
          (state) => {
            state.loading = true;

            state.error = null;
          }
        )

        .addCase(
          registerUser.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.user =
              action.payload;

            state.error = null;
          }
        )

        .addCase(
          registerUser.rejected,
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
          loginUser.pending,
          (state) => {
            state.loading = true;

            state.error = null;
          }
        )

        .addCase(
          loginUser.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.user =
              action.payload;

            state.error = null;
          }
        )

        .addCase(
          loginUser.rejected,
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
          getProfile.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          getProfile.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.user =
              action.payload;
          }
        )

        .addCase(
          getProfile.rejected,
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
          updateProfile.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          updateProfile.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.user =
              action.payload;

            state.error = null;
          }
        )

        .addCase(
          updateProfile.rejected,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.error =
              action.payload;
          }
        );
    },
  });

export const {
  logout,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;