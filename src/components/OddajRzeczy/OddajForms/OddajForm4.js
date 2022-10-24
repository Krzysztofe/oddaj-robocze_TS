import Buttons from "../../Buttons";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContextProv";
import InputText from "./OddajFormInputs/InputText";
import {motion} from "framer-motion";

const OddajForm4 = () => {

    const {inputsValue, handleChange} = useContext(GlobalContext)


    const propsHandleChange = (e) => {
        typeof handleChange === 'function' && handleChange(e)
    }

    return (
        <motion.main className='oddajForm__inputs'
              initial={{opacity: 0, y: -40}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1}}>

            <aside className="form4__leftContainer">
                <h3 className='form4__h3'>Adres odbioru:</h3>

                <InputText type='text'
                           name='street'
                           label='Ulica'
                           value={inputsValue.street}/>

                <InputText type='text'
                           name='city'
                           label= 'Miasto'
                           value={inputsValue.city}/>

                <InputText type='text'
                           name='postCode'
                           label='Kod pocztowy'
                           value={inputsValue.postCode}/>

                <InputText type='number'
                           name='phone'
                           label='Numer telefonu'
                           value={inputsValue.phone}/>
            </aside>


            <aside className="form4__rightContainer">
                <h3 className='form4__h3'>termin odbioru:</h3>

                <InputText type='date'
                           name='date'
                           label='Data'
                           value={inputsValue.date}/>

                <InputText type='time'
                           name='time'
                           label='Godzina'
                           value={inputsValue.time}/>

                <div className='form4__inputContainer'>
                    <label className='form4__label'>Uwagi dla kuriera</label>
                    <textarea rows='2' name='note'
                              value={inputsValue.note}
                              onChange={propsHandleChange}
                              className='form4__textarea'/>
                </div>
            </aside>
            <Buttons/>
        </motion.main>
    );
};

export default OddajForm4;







