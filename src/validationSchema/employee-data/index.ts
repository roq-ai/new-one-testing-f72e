import * as yup from 'yup';

export const employeeDataValidationSchema = yup.object().shape({
  position: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  hotel_id: yup.string().nullable().required(),
});
