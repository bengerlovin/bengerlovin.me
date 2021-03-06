import { ContactFormSchema } from "lib/validation"
import { Formik, useFormik } from "formik";
import * as Yup from 'yup'
import toast from 'react-hot-toast';
import { useState } from "react";

const initialValues = {
    name: '',
    email: '',
    message: '',
}

const ContactForm = ({ }) => {

    const [isFormSubmitting, setIsFormSubmitting] = useState(false)
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(ContactFormSchema),
        onSubmit: async (values) => {
            setIsFormSubmitting(true)
            await sendEmail(values);
            setIsFormSubmitting(false);
            formik.resetForm()
        },
    });

    let conditionalNameStyling = `${formik.touched.name && formik.errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-indigo-300 focus:ring-indigo-200'}`

    let conditionalEmailStyling = `${formik.touched.email && formik.errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-indigo-300 focus:ring-indigo-200'}`

    let conditionalMessageStyling = `${formik.touched.message && formik.errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-indigo-300 focus:ring-indigo-200'}`

    return (
        <>
            <form className="w-full" onSubmit={formik.handleSubmit} >
                <div className="flex flex-row items-start justify-between gap-4 mb-0">
                    <label className="block w-1/2 mb-6 min-h-fit" htmlFor="name">
                        <span className="text-sm tracking-tight text-gray-600 md:text-md ">Name</span>
                        <input
                            required
                            type="text"
                            name="name"
                            className={`placeholder:text-sm md:placeholder:text-[15px] block w-full mt-1 rounded-md shadow-sm focus:ring  focus:ring-opacity-50 placeholder:text-gray-400 focus:placeholder:text-gray-600 ${conditionalNameStyling}`}
                            placeholder="Dwight Schrute"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="mt-2 text-sm text-red-500 ">{formik.errors.name}</div>
                        ) : null}
                    </label>
                    <label className="block w-1/2 mb-6" htmlFor="email">
                        <span className="text-sm tracking-tight text-gray-600 md:text-md ">Email</span>
                        <input
                            required
                            type="email"
                            name="email"
                            className={`placeholder:text-sm md:placeholder:text-[15px] block w-full mt-1 rounded-md shadow-sm focus:ring  focus:ring-opacity-50 placeholder:text-gray-400 focus:placeholder:text-gray-600 ${conditionalEmailStyling}`}
                            placeholder="d@dundermifflin.com"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="mt-2 text-sm text-red-500 ">{formik.errors.email}</div>
                        ) : null}
                    </label>
                </div>

                {/* Message Block */}
                <label className="block mb-6" htmlFor="message">
                    <span className="text-sm tracking-tight text-gray-600 md:text-md ">Message</span>
                    <textarea
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        name="message"
                        className={`placeholder:text-sm md:placeholder:text-[15px] block w-full mt-1 rounded-md shadow-sm focus:ring  focus:ring-opacity-50 placeholder:text-gray-400 focus:placeholder:text-gray-600 ${conditionalMessageStyling}`}
                        placeholder="Black bears are the best bear..."
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className="mt-2 text-sm text-red-500 ">{formik.errors.message}</div>
                    ) : null}
                </label>

                <button disabled={isFormSubmitting} className="text-sm md:text-base flex items-center justify-center gap-1 py-2.5 px-4 border-[1px] rounded-md border-blue-900 bg-blue-700  focus:outline-blue-400 focus:outline-2"
                    type="submit">
                    <span className={'text-zinc-100'}>{isFormSubmitting ? 'Sending Message' : 'Send Message'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>

            </form>
        </>
    )
}

async function sendEmail({ name, email, message }) {

    let urlParams = new URLSearchParams({ name: `${name}`, email: `${email}`, message: `${message}` });
    const sendEmailResult = await fetch(`/api/mail?${urlParams}`)

    let res = await sendEmailResult.json();
    if (res.error) {
        toast.error('Could not process submission.');
        return;
    } // return a toast message saying sending was unsuccessful

    toast.success("Message successfully sent!")
    return;

}

export default ContactForm
