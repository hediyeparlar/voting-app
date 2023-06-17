// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Employee {
//   id: number;
//   fullname: string;
//   department: string;
//   avatar: string;
// }

// interface EmployeesState {
//   employees: Employee[];
// }

// const initialState: EmployeesState = {
//   employees: [],
// };

// const employeesSlice = createSlice({
//   name: "employees",
//   initialState,
//   reducers: {
//     setEmployees: (state, action: PayloadAction<Employee[]>) => {
//       state.employees = action.payload;
//     },
//   },
// });

// export const { setEmployees } = employeesSlice.actions;

// export default employeesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";

interface EmployeeData {
  id: number;
  fullname: string;
  department: string;
  avatar: string;
}
// Type for our state
export interface AuthState {
  employees: EmployeeData[];
}

// Initial state
const initialState: AuthState = {
  employees: [],
};

// Actual Slice
export const employeesSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setEmployees(state, action) {
      state.employees = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setEmployees } = employeesSlice.actions;

export const selectAuthState = (state: AppState) => state.employeesSlice;

export default employeesSlice.reducer;
