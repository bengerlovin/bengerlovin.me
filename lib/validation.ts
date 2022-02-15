import * as Yup from 'yup';

export const ContactFormSchema = {
    name: Yup.string()
        .min(2, 'Name is too short')
        .max(50, 'Name is too long')
        .required('Name is required'),
    message: Yup.string().min(0).max(600, "Message is too long (greater than 600 characters)"),
    email: Yup.string().email('Invalid email').required('Required'),
}