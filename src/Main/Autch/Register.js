import React, {useContext, useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import getInput from "../Input";
import {registerWithEmailAndPassword} from "../firebase";
import { useNavigate } from "react-router-dom";
import Context from "../context";
import {Error} from "../Alerts/Alerts";

function Register() {
    const navigate = useNavigate();
    const {setLogin} = useContext(Context);
    let [loader, setLoader] = useState(false);
    let [error, setError] = useState(false);

    const validationsSchema = Yup.object().shape({
        name: Yup.string().typeError('Must be a string.')
            .required('Valid last name is required.'),
        email: Yup.string().email('Valid email is required.')
            .typeError('Must be a string.')
            .required('Valid email is required.'),
        password: Yup.string().typeError('Must be a string.')
            .required('Please enter your shipping address.')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
        confirmPassword: Yup.string().typeError('Must be a string.')
            .required('Provide a valid state.').test('passwords-match', 'Passwords must match', function(value){
                return this.parent.password === value})
    })

    return (
        <Formik initialValues={{
            name:'',
            email: '',
            password: '',
            confirmPassword: ''
        }} validateOnBlur validationSchema={validationsSchema}
                onSubmit={(values) => {
                    setLoader(true)
                    registerWithEmailAndPassword(values.name, values.email, values.password).then(result => {
                        if (typeof(result)!=='string') {
                            setLogin(result.currentUser.displayName);
                            navigate('/', { replace: false });
                        }else{
                            setError(result)
                            setLoader(false)
                        }
                    })
                }}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div className="row mt-5">
                <div className="container col-3" style={{height: "500px"}}>
                     {error && <Error text={error}/>}
                    <div className="form-group">
                            {getInput("name", "Name", "text", "", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="form-group">
                        {getInput("email", "Email", "email", "you@example.com", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="form-group">
                        {getInput("password", "Password", "password", "Password", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="form-group">
                        {getInput("confirmPassword", "Confirm password", "password", "Password", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Register {loader && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>} </button>
                </div>
                    </div>
            )}
        </Formik>

    )
}

export default Register;