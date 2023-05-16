import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@env";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const loginAsync =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(setUser(null));
      const response = await axios.post(
        `${API_URL}/users/signin`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      const user = response.data;

      dispatch(setUser(user));
      return user;
    } catch (error) {
      console.log(error);
    }
  };

export const logoutAsync = () => async (dispatch) => {
  try {
    await axios.post(`${API_URL}/users/signout`);

    dispatch(clearUser());
  } catch (error) {
    console.log(error);
  }
};

export const selectUser = (state) => state.user;

export default userSlice.reducer;
