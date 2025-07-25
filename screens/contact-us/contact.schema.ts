import * as yup from 'yup';

export const contactSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  message: yup.string().required('Message is required'),
  subject: yup.string().required('Subject is required'),
});

export type ContactFormValues = yup.InferType<typeof contactSchema>;
