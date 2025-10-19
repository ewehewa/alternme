import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required('Email or Username is required')
    .min(3, 'Username must be at least 3 characters'),

  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
      'Incorrect login details'
    ),
});

export const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Email must be a valid email'),


  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
      'Password must have at least one lowercase, one uppercase, and one number'
    ),

  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const AdminLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email'),
    
  password: yup
    .string()
    .required('Password is required')
});
