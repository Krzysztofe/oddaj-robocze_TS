import {useState} from "react";
import PropTypes from "prop-types";

const InputSelect = ({
                         array, textLabel,
                         inputsValueSelect, handleSelect
                     }) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(state => !state)
    }

    return (
        <div className='select__container'>

            <label className='selec__label'>
                {textLabel}
            </label>

            <div className='select__options'>

                <div onClick={handleOpen}
                     className="select__top">
                    {typeof inputsValueSelect === "string" ? inputsValueSelect[0].toUpperCase() + inputsValueSelect.slice(1): inputsValueSelect}
                    <div className={open ? 'select__arrow--up' : 'select__arrow'}> </div>
                </div>

                {open &&
                    <>
                        {array.map(item => {
                                return <div key={item}
                                            className="select__option"
                                            onClick={e => {
                                                handleSelect(item)
                                                handleOpen()
                                            }}>
                                    {item}
                                </div>
                            })
                        }
                    </>
                }

            </div>
        </div>
    );
};

InputSelect.propTypes = {
    array: PropTypes.array.isRequired,
    textLabel: PropTypes.string.isRequired,
    inputsValueSelect: PropTypes.oneOfType(
            [PropTypes.string.isRequired,
                PropTypes.number.isRequired]),
    handleSelect: PropTypes.func.isRequired
}


export default InputSelect;