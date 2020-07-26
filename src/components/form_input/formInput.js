import React from 'react'
import './formInput.scss';

const FormInput = ({ handleChange, value, label, ...otherProps }) => {
    return (    
        <div className="group">
            <input  className="form-input" onChange={handleChange} {...otherProps} />  
            {
                label ? 
                <label className={`${value.length ? "shrink" : ''} form-input-label`}>{label}</label>
                : null
            }
        </div>
    )
}

export default FormInput;