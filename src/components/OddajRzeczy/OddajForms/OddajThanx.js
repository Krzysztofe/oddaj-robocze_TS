import Title from "../../Title";
import {Link} from 'react-router-dom'
import {motion} from "framer-motion";

const OddajThanx = () => {

    return (
        <motion.main className='oddajForm__inputs oddajForm__inputs--thnx'
              initial={{opacity: 0, y: -40}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1}}>

            <Title text={['dziękujemy za przesłanie formularza',
                'na maila prześlemy wszelkie informacje o odbiorze']}
                   classContainer={'oddajThnx__container'}
                   classH2={'oddajThnx__h2'}
                   classUnderline={'oddajThnx__decoration'}/>

            <Link to='/' className='ddajThanx__link'>
                <button className='ddajThanx__button'>
                    strona główna
                </button>
            </Link>

        </motion.main>
    );
};

export default OddajThanx;