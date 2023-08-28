import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable(),
  price: yup.number().integer().nullable(),
  availability: yup.boolean().nullable(),
  outlet_id: yup.string().nullable().required(),
});
