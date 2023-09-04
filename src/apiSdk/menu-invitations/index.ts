import axios from 'axios';
import queryString from 'query-string';
import { MenuInvitationInterface, MenuInvitationGetQueryInterface } from 'interfaces/menu-invitation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMenuInvitations = async (
  query?: MenuInvitationGetQueryInterface,
): Promise<PaginatedInterface<MenuInvitationInterface>> => {
  const response = await axios.get('/api/menu-invitations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMenuInvitation = async (menuInvitation: MenuInvitationInterface) => {
  const response = await axios.post('/api/menu-invitations', menuInvitation);
  return response.data;
};

export const updateMenuInvitationById = async (id: string, menuInvitation: MenuInvitationInterface) => {
  const response = await axios.put(`/api/menu-invitations/${id}`, menuInvitation);
  return response.data;
};

export const getMenuInvitationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/menu-invitations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMenuInvitationById = async (id: string) => {
  const response = await axios.delete(`/api/menu-invitations/${id}`);
  return response.data;
};
