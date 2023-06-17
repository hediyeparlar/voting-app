import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";
import { IEmployee } from "../Api/Employee";
import { getEmployeesAction } from "./EmployeesAction";
export interface EmployeesState {
  data: IEmployee[];
}

const initialState: EmployeesState = {
  data: [],
};

export const EmployeesSlice = createSlice({
  name: "Employees",
  initialState,
  reducers: {
    voteEmployee: (state, id) => {
      state.data = [...state.data.map(employee => {
        if(employee.id === id.payload)
         employee.vote++;
        return employee
      })].sort((a,b) => b.vote - a.vote);
    },
    // emplo
  },
  
  extraReducers: (builder)=> {
    builder.addCase(getEmployeesAction.fulfilled, (state, action) => {
      state.data = [...action.payload.employees].sort((a,b) => b.vote - a.vote);
    }).addCase(HYDRATE,  (state, action:any) => {
      return {
        ...state,
        ...action.payload.Employees,
      }
    })
  }
});
export const { voteEmployee } = EmployeesSlice.actions
export const selectEmployeeState = (state: AppState) => state.Employees.data;

export default EmployeesSlice.reducer;
