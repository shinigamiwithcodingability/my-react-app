import React from 'react';
import {Formik, Form,Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import type User from '../dataschemas/user';

const initialValues: User = {
    Username: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
};

const validationSchema = Yup.object().shape({
    Username: Yup.string().required('Username is required').min(6, 'Username must be at least 6 characters long'),
    Email: Yup.string().email('Invalid email').required('Email is required'),
    Password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
    ConfirmPassword: Yup.string().oneOf([Yup.ref('Password')], 'Passwords must match').required('Confirm Password is required'),
});

const adminValidator =  (user: User) => {
    const adminUserNames = ["administrator", "superuser", "testuser"];
     if(adminUserNames.includes(user.Username)) {
         return {Username: "Username is not allowed"};
     }
     return {}
}


const UserRegistrationComponent = () =>{
    const handleSubmit = (values: User) => {
        console.log(`User values are submitted ${JSON.stringify(values)}`); 
    }
    const handleReset = () =>{
        console.log(`Form has been reset`);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            onReset={handleReset}
            validateOnBlur={true}
            validationOnChange={true}  
            validate={adminValidator}
        >
            <Form >
                <div className='form-group'>
                    <label htmlFor="Username">User Name : </label>
                    <Field type="text" id="Username" name="Username" className="form-control"></Field>
                    <ErrorMessage name="Username" component="div" className="alert alert-danger" />
                </div>
                <div className='form-group'>
                    <label htmlFor="Email">Email : </label>
                    <Field type="email" id="Email" name="Email" className="form-control"></Field>
                    <ErrorMessage name="Email" component="div" className="alert alert-danger" />
                </div>
                <div className='form-group'>
                    <label htmlFor="Password">Password : </label>
                    <Field type="text" id="Password" name="Password" className="form-control"></Field>
                    <ErrorMessage name="Password" component="div" className="alert alert-danger" />
                </div>
                <div className='form-group'>
                    <label htmlFor="ConfirmPassword">Confirm Password : </label>
                    <Field type="password" id="ConfirmPassword" name="ConfirmPassword" className="form-control"></Field>
                    <ErrorMessage name="ConfirmPassword" component="div" className="alert alert-danger" />
                </div>
                <div className='form-group'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
            </Form>
        </Formik>
    );
};


export default UserRegistrationComponent;
