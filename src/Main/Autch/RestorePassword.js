import React, { useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import getInput from "../Input";
import {sendPasswordReset} from "../firebase";
import {Error, Success} from "../Alerts/Alerts";


function RestorePassword() {
    let [loader, setLoader] = useState(false);
    let [error, setError] = useState(false);

    const validationsSchema = Yup.object().shape({
        email: Yup.string().email('Valid email is required.')
            .typeError('Must be a string.')
            .required('Valid email is required.')
    })


    return (

        <Formik initialValues={{
            email: ''
        }} validateOnBlur validationSchema={validationsSchema}
                onSubmit={(values) => {
                    setLoader(true)
                    sendPasswordReset(values.email).then(result => {
                        setError(result)
                        setLoader(false)
                    })
                }}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div className="row mt-5">
                    <div className="container col-3" style={{height: "500px"}}>
                        {error && (error === "Account does not exist."?<Error text={error}/> : <Success text={error} />)}
                        <div className="form-group">
                            {getInput("email", "Email", "email", "you@example.com", handleChange, handleBlur, values, errors, touched)}
                        </div>

                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Restore password {loader && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>} </button>

                    </div>

                </div>

            )}
        </Formik>

    )}

export default RestorePassword;