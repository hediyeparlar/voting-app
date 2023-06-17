import { createAsyncThunk } from "@reduxjs/toolkit"
import { getEmployees } from "../Api/Employee"

export const getEmployeesAction = createAsyncThunk(
    'Employees',
    async () => {
      const response = await getEmployees();
      return response.data
    }
  )

  // getEmployeeDetailAction = createAsyncThunk(
  //   'Employees',
  //   async () => {
  //     const response = await getEmployeeDetail();
  //     return response.data
  //   }
  // )