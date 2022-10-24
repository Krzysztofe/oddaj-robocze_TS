import Buttons from "../../Buttons";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalContextProv";
import OddajSummaryTable from "./OddajSummaryTable";
import {motion} from "framer-motion";

const OddajSummary = () => {

    const {inputsValue} = useContext(GlobalContext)

    const selectBagsNumber = (message, inputsValue) => {
        if (inputsValue === '-- Wybierz --'){
            return message
        } return inputsValue
    }

    const selectBagsDescription = () =>{
        if (inputsValue.selectBags === 1){
            return 'worek'
        }
        else if (inputsValue.selectBags > 1 && inputsValue.selectBags < 4){
            return 'worki'
        }  else if (inputsValue.selectBags === '-- Wybierz --'){
            return null
        }
            return 'worków'
    }





    return (
        <motion.section className='oddajForm__inputs'
                 initial={{opacity: 0, y: -40}}
                 animate={{opacity: 1, y: 0}}
                 transition={{delay: 0.1}}>
            <h3 className='summary__h3'>oddajesz:</h3>

            <div className="summary__topContainer">
                <div className="summary__icon1"></div>
                <p className='summary__p'> {selectBagsNumber('wróć do kroku 2/4', inputsValue.selectBags)}
                   <> </>{selectBagsDescription()}
                    {inputsValue.selectStuff ? `, ${inputsValue.selectStuff}` : null }
                    {inputsValue.dzieciom ? <>, dzieciom</> : null}
                    {inputsValue.matkom ? <>, samotnym matkom</> : null}
                    {inputsValue.bezdomnym ? <>, bezdomnym</> : null}
                    {inputsValue.niepelnosprawnym ? <>, niepełnosprawnym</> : null}
                    {inputsValue.starszym ? <>, osobom starszym</> : null}
                </p>
            </div>

            <div className="summary__topContainer">
                <div className="summary__icon2"></div>
                <p className='summary__p'>
                    {inputsValue.selectLocalisation === '-- Wybierz --' ?
                        null :
                        'dla lokalizacji:'}
                   <> </>
                    {selectBagsNumber('wróć do kroku 3/4', inputsValue.selectLocalisation)}
                    {inputsValue.organisationName ? <>, {inputsValue.organisationName}</> : null}
                </p>
            </div>
            <OddajSummaryTable/>
            <Buttons/>
        </motion.section>
    );
};

export default OddajSummary;