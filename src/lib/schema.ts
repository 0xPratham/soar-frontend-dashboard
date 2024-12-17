import * as Yup from 'yup';

export const editProfileSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .max(100, 'Name is too long'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required')
        .max(255, 'Email is too long'),
    dob: Yup.string().required('Date of birth is required'),
    permanentAddress: Yup.string()
        .required('Permanent address is required')
        .max(255, 'Permanent address is too long'),
    postal: Yup.string()
        .required('Postal code is required')
        .max(10, 'Postal code is too long'),
    username: Yup.string()
        .required('Username is required')
        .min(3, 'Username is too short')
        .max(50, 'Username is too long'),
    password: Yup.string()
        .required('Password is required')
        .max(255, 'Password is too long'),
    presentAddress: Yup.string()
        .required('Present address is required')
        .max(255, 'Present address is too long'),
    city: Yup.string()
        .required('City name is required')
        .max(100, 'City name is too long'),
    country: Yup.string()
        .required('Country name is required')
        .max(100, 'Country name is too long'),
});
