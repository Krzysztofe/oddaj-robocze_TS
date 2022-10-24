import Buttons from "../../Buttons";
import InputSelect from "./OddajFormInputs/InputSelect";
import {useContext} from "react";
import {motion} from "framer-motion";
import {GlobalContext} from "../Context/GlobalContextProv";
import InputCheckbox from "./OddajFormInputs/InputCheckbox";

const OddajForm3 = () => {

    const {handleChange, inputsValue, setInputsValue} = useContext(GlobalContext)

    const propsHandleChange = (e) => {
        typeof handleChange === 'function' && handleChange(e)
    }

    const handleSelect = (item) => {
        setInputsValue({...inputsValue, selectLocalisation: item})
    }

    return (
        <motion.main className='oddajForm__inputs'
              initial={{opacity: 0, y: -40}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1}}>

            <InputSelect textLabel=''
                         array={['Poznań', 'Warszawa', 'Kraków', 'Katowice']}
                         inputsValueSelect={inputsValue.selectLocalisation}
                         handleSelect={handleSelect}/>

            <h3 className='oddajForm3__h3'>komu chcesz pomóc?</h3>

            <div className="oddajForm3__checkboxes">

                <InputCheckbox value={inputsValue.dzieciom}
                               name='dzieciom'
                               label='dzieciom'/>

                <InputCheckbox value={inputsValue.matkom}
                               name='matkom'
                               label='samotnym matkom'/>

                <InputCheckbox value={inputsValue.bezdomnym}
                               name='bezdomnym'
                               label='bezdomnym'/>

                <InputCheckbox value={inputsValue.niepelnosprawnym}
                               name='niepelnosprawnym'
                               label='Niepelnosprawnym'/>

                <InputCheckbox value={inputsValue.starszym}
                               name='starszym'
                               label='Osobom starszymom'/>

                <div className='oddajForm3__label'> </div>

            </div>

            <h3 className='oddajForm3__h3'>
                wpisz nazwę konkretnej organizacji (opcjonalnie)
            </h3>

            <input type='text'
                   name='organisationName'
                   value={inputsValue.organisationName}
                   onChange={propsHandleChange}
                   className='oddajForm3__textInput'/>

            <Buttons/>
        </motion.main>
    );
};

export default OddajForm3;