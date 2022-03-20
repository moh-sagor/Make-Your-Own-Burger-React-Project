import React, { Component } from 'react';
import { Formik } from 'formik';

class Auth extends Component {
    render() {
        return (
            <div style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px",
                marginBottom: '10px',
                backgroundColor: "#D70F64",
                color: "white",
            }} >
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            passwordConfirm: "",
                        }
                    }

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 8) {
                            errors.password = 'Must be Atlest 8 Characters';
                        }
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = 'Password doesnot match!';
                        }

                        console.log("Errors", errors);
                        return errors;
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (<div>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="email"
                                placeholder="Enter Your Email"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email}
                            <br />
                            <input
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password}
                            <br />
                            <input
                                name="passwordConfirm"
                                placeholder="Confirm Password"
                                className="form-control"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                            />
                            {errors.passwordConfirm}
                            <br />
                            <button type="submit" className="btn btn-success">Sign Up</button>
                        </form>
                    </div>)}
                </Formik>
            </div>
        )
    }
}

export default Auth;