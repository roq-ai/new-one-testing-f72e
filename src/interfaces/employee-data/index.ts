import { UserInterface } from 'interfaces/user';
import { HotelInterface } from 'interfaces/hotel';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeDataInterface {
  id?: string;
  user_id: string;
  hotel_id: string;
  position?: string;
  start_date?: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  hotel?: HotelInterface;
  _count?: {};
}

export interface EmployeeDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  hotel_id?: string;
  position?: string;
}
