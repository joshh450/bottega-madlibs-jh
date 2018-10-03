import React from 'react';

const Input = (CustomLabel, state, onChange, name) => {
    return (
        <div className="input">
            <input name={name} value={state} onChange={onChange}/>
            <label>{CustomLabel}</label>
        </div>
    )
}

export default Input;