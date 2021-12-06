import React from "react";

function getInput(id, text, type, placeholder, handleChange, handleBlur, values, errors, touched) {
        return (
            <div>
                <label htmlFor={id}>{text}</label>
                <input type={type} onChange={handleChange} onBlur={handleBlur} value={values[id]}
                       placeholder={placeholder}
                       className={"form-control " + (touched[id] && errors[id] ? 'is-invalid' : touched[id] ? 'is-valid' : '')}
                       id={id}/>
                {touched[id] && errors[id] && <div className="invalid-feedback">{errors[id]}</div>}
            </div>
        );
}
export default getInput;
