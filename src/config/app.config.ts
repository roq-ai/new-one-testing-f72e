interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Employee'],
  customerRoles: [],
  tenantRoles: ['Employee', 'Menu'],
  tenantName: 'Hotel',
  applicationName: 'New One Testing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage personal data', "Invite 'Menu' to application"],
};
