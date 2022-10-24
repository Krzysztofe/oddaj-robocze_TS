import React, {useContext} from 'react';
import {GlobalContext} from "../Context/GlobalContextProv";
import InputRadio from "./OddajFormInputs/InputRadio";
import {motion} from "framer-motion";


const OddajForm1 = () => {

    const {handleIncrease} = useContext(GlobalContext)

    return (
        <>
            <motion.main className='oddajForm__inputs'
                         initial={{opacity: 0, y: -40}}
                         animate={{opacity: 1, y: 0}}
                         transition={{delay: 0.1}}
            >

                <InputRadio value='ubrania, które nadają się do ponownego użycia'/>
                <InputRadio value='ubrania, do wyrzucenia'/>
                <InputRadio value='zabawki'/>
                <InputRadio value='ksiązki'/>
                <InputRadio value='inne'/>

                <div className="formButtons">
                    <button onClick={handleIncrease}
                            className='formButton'>
                        dalej
                    </button>
                </div>

            </motion.main>
        </>
    );
};

export default OddajForm1;