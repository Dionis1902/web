import React, {useContext} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import Countries from "./Countries";
import Context from "../context";
import {doc, setDoc, getDocs, collection} from "firebase/firestore";
import {useDispatch, useSelector} from "react-redux";
import {setItemCount} from "../Reducers/Cart";
import getInput from "../Input";
import {auth} from '../firebase';

function Form({setSuccess}) {
    const {db, getData} = useContext(Context);
    const dispatch = useDispatch();

    const validationsSchema = Yup.object().shape({
        firstName: Yup.string().typeError('Must be a string.')
            .required('Valid first name is required.'),
        lastName: Yup.string().typeError('Must be a string.')
            .required('Valid last name is required.'),
        email: Yup.string().email('Please enter a valid email address for shipping updates.')
            .typeError('Must be a string.')
            .required('Valid email is required.'),
        address: Yup.string().typeError('Must be a string.')
            .required('Please enter your shipping address.'),
        state: Yup.string().typeError('Must be a string.')
            .required('Provide a valid state.'),
        zip: Yup.number().typeError('Must be a number.')
            .required('Zip code required.')
            .test('len', 'Must be exactly 5 characters', val => val && val.toString().length === 5),
        country: Yup.string().required('Please select a valid country.'),
        phone: Yup.string().matches('^[+][(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$', 'Invalid phone format.')
    })
    const cart = useSelector(state => state.cart)

    function getSubtotal() {
        return Object.keys(cart).map((id) => getData(id).price * cart[id]).reduce((partial_sum, a) => partial_sum + a, 0)
    }

    async function pushData(data) {
        setSuccess('load')
        const usersRef = collection(db, "users")
        const billsRef = collection(doc(usersRef, auth.currentUser.uid), "bills")
        getDocs(billsRef).then(docs => {
            setDoc(doc(billsRef, 'bill' + docs.size), {billingData: data, cart: cart, totalPrice:getSubtotal()}).then(() => {
                    setSuccess(data['email'])
                    Object.keys(cart).map((id) => dispatch(setItemCount(id, 0)))
                }
            );
        })



    }

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            country: '',
            state: '',
            zip: ''
        }} validateOnBlur validationSchema={validationsSchema}
                onSubmit={(values) => pushData(values)}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            {getInput("firstName", "First name", "text", "", handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className="col-md-6 mb-3">
                            {getInput("lastName", "Last name", "text", "", handleChange, handleBlur, values, errors, touched)}
                        </div>
                    </div>
                    <div className="mb-3">
                        {getInput("email", "Email", "email", "you@example.com", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="mb-3">
                        {getInput("address", "Address", "text", "1234 Main St", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="mb-3">
                        {getInput("phone", <div>Phone <span className="text-muted">(Optional)</span>
                        </div>, "phone", "+380957452354", handleChange, handleBlur, values, errors, touched)}
                    </div>
                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <Countries handleChange={handleChange} handleBlur={handleBlur} values={values}
                                       errors={errors} touched={touched}/>
                        </div>
                        <div className="col-md-4 mb-3">
                            {getInput("state", "State", "text", "Lviv", handleChange, handleBlur, values, errors, touched)}
                        </div>
                        <div className="col-md-3 mb-3">
                            {getInput("zip", "Zip", "text", "00000", handleChange, handleBlur, values, errors, touched)}
                        </div>
                    </div>
                    <hr className="mb-4"/>
                    <button onClick={handleSubmit}
                            className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout
                    </button>
                </div>)}
        </Formik>
    );
}

export default Form;