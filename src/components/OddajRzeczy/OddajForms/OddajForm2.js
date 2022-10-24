
import {useContext} from "react";
import Buttons from "../../Buttons";
import InputSelect from "./OddajFormInputs/InputSelect";
import {GlobalContext} from "../Context/GlobalContextProv";
import {motion} from 'framer-motion'
const OddajForm2 = () => {

    const {inputsValue, setInputsValue} = useContext(GlobalContext)

    const handleSelect = (item) => {
        setInputsValue({...inputsValue, selectBags: item})
    }

    return (
        <>
            <motion.main className='oddajForm__inputs'
                  initial={{opacity: 0, y: -40}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.1}}>

                <InputSelect textLabel= 'Liczba 60 l. worków:'
                             array={[1, 2, 3, 4, 5, 6]}
                             inputsValueSelect={inputsValue.selectBags}
                             handleSelect={handleSelect}/>
                <Buttons/>

            </motion.main>
        </>
    );
};

export default OddajForm2;