import { tUserStatus, tUserType } from "./data_definition";

const users = [
    {
      id: 1,
      name: 'blackbyte',
      password: '#arbeit$',
      status: tUserStatus.Active,
      type: tUserType.Admin,
    },
    {
      id: 2,
      name: 'birgit',
      password: '#arbeit$',
      status: tUserStatus.Active,
      type: tUserType.Admin,
    },
    {
      id: 3,
      name: 'lehrer',
      password: '#arbeit$',
      status: tUserStatus.Active,
      type: tUserType.User,
    },
    {
      id: 4,
      name: 'lehrer_1',
      password: '#arbeit$',
      status: tUserStatus.Inactive,
      type: tUserType.User,
    },
    {
      id: 5,
      name: 'schueler1',
      password: '#arbeit$',
      status: tUserStatus.Active,
      type: tUserType.Student,
    },
    {
      id: 6,
      name: 'schueler2',
      password: '#arbeit$',
      status: tUserStatus.Active,
      type: tUserType.Student,
    },
  ];

export {users};