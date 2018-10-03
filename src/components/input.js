import React from 'react';

const Input = ({CustomLabel, state, name}, onChange) => {
    return (
        <div key={name} className="input">
            <input name={name} value={state} onChange={onChange}/>
            <label>{CustomLabel}</label>
        </div>
    )
}

export default Input;