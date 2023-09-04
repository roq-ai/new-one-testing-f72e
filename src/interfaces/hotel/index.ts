import { EmployeeDataInterface } from 'interfaces/employee-data';
import { MenuInterface } from 'interfaces/menu';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HotelInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee_data?: EmployeeDataInterface[];
  menu?: MenuInterface[];
  user?: UserInterface;
  _count?: {
    employee_data?: number;
    menu?: number;
  };
}

export interface HotelGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
