
import * as yup from 'yup';

const signInValidation=()=>{

 return yup.object({
    firstName: yup.string()
        .required('required'),

    lastName: yup.string()
    .required('required'),

    email: yup.string()
    .required('required'),

    password: yup.string()
    .required('required')
    .min(8),

    confirmPassword: yup.string()
    .required('required')
    .min(8)
    .equals('password', 'passwords must be matched!')
}) }

export default signInValidation;