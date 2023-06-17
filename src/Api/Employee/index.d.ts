export interface IEmployee {
  id: string;
  fullname: string;
  department: string;
  avatar: string;
  vote: number;
}
export interface IEmplyeesQRequest {
  employees: IEmployee[];
}
