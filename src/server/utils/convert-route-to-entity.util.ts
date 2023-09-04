const mapping: Record<string, string> = {
  'employee-data': 'employee_data',
  hotels: 'hotel',
  menus: 'menu',
  'menu-invitations': 'menu_invitation',
  payrolls: 'payroll',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
