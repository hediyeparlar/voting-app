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

export interface IEmplyeeDetailQRequest {
  employee: IEmployee;
}
