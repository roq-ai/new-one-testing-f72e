import * as yup from 'yup';

export const menuInvitationValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  menu_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
