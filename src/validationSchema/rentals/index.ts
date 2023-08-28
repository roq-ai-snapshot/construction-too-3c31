import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_date: yup.date().required(),
  return_date: yup.date().nullable(),
  tool_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
