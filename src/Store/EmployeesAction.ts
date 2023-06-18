import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployeeDetail, getEmployees } from "../Api/Employee";

export const getEmployeesAction = createAsyncThunk("Employees", async () => {
  const response = await getEmployees();
  return response.data;
});

export const getEmployeeDetailAction = createAsyncThunk(
  "Employee",
  async (id: string) => {
    const response = await getEmployeeDetail(id);
    return response.data;
  }
);
