
import { createSlice } from "@reduxjs/toolkit";


let savedUsers = [];

try {
    savedUsers = JSON.parse(
        localStorage.getItem("loggedInUsers") || "[]"
    );

    if (!Array.isArray(savedUsers)) {
        savedUsers = [];
    }
} catch (error) {
    savedUsers = [];
}

const UserSlice = createSlice({

    name: "user",

    initialState: {
        userList: savedUsers
    },

    reducers: {

      
        addLoggedInUser: (state, action) => {

            const newUser = action.payload;

            if (!newUser || !newUser.username) {
                return;
            }

            const existingUser = state.userList.find(
                (user) =>
                    user.username?.toLowerCase() ===
                    newUser.username.toLowerCase()
            );

            if (!existingUser) {
                state.userList.push(newUser);
            } else {
                existingUser.lastLogin = newUser.lastLogin;
            }

        }

    }

});

export const { addLoggedInUser } = UserSlice.actions;

export default UserSlice.reducer;
