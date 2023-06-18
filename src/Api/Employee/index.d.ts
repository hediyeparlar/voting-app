export interface IEmployee {
  id: string;
  fullname: string;
  department: string;
  avatar: string;
  vote: number;
  age: number;
}

export interface IEmplyeesQRequest {
  employees: IEmployee[];
}

export interface IEmployeeDetail {
  id: string;
  fullname: string;
  department: string;
  avatar: string;
  vote: number;
  age: number;
  address: string;
  email: string;
  telephone: string;
  birthday: string;
}
export interface IEmployeeDetailQRequest {
  employee: IEmployeeDetail;
}
