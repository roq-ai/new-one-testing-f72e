import { MenuInvitationInterface } from 'interfaces/menu-invitation';
import { HotelInterface } from 'interfaces/hotel';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description?: string;
  price?: number;
  availability?: boolean;
  hotel_id: string;
  created_at?: any;
  updated_at?: any;
  menu_invitation?: MenuInvitationInterface[];
  hotel?: HotelInterface;
  _count?: {
    menu_invitation?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  hotel_id?: string;
}
