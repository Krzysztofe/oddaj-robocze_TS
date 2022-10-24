import React, {useContext} from 'react';
import {GlobalContext} from "../../Context/GlobalContextProv";
import PropTypes from "prop-types";

const InputCheckbox = ({value, name, label}) => {
    const {handleChange} = useContext(GlobalContext)

    return (
        <label className='oddajForm3__label'>
            <input type='checkbox' name={name}
                   value={value}
                   checked={value}
                   onChange={handleChange}
                   className='oddajForm3__checkbox'/>
            <div className='oddajForm3__checkboxStyle'>{label}</div>
        </label>
    );
};

InputCheckbox.propTypes = {
    value: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default InputCheckbox;