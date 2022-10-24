import React, {useContext} from 'react';
import {GlobalContext} from "../../Context/GlobalContextProv";
import PropTypes from "prop-types";

const InputText = ({label, name, value, type}) => {

    const {handleChange} = useContext(GlobalContext)

    return (
        <div className='form4__inputContainer'>
            <label className='form4__label'>{label}</label>
            <input type={type} name={name}
                   value={value}
                   onChange={handleChange}
                   className='form4__input'/>
        </div>
    );
};

InputText.propType = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}


export default InputText;