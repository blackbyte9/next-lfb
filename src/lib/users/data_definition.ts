
export enum tUserStatus {
  Active = 1,
  Inactive = 0,
};

export enum tUserType {
  Admin = "admin",
  User = "user",
  Student = "student",
};

export type tUser = {
  id: number
  name: string
  password: string
  status: tUserStatus
  type: tUserType
};

