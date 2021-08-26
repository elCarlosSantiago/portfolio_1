import * as yup from 'yup';

export default yup.object().shape({
  from_name: yup.string().required('Name required'),
  from_email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address'),
  subject: yup.string().required('Subject required'),
  message: yup.string().required('Message required'),
});
