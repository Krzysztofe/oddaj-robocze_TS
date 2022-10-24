import {Link} from "react-router-dom";
import Title from "../Title";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Libraries/FireBaseConfig";
import Tshirt from '../../asets/IconTshirt.png';
import Bag from '../../asets/IconBag.png';
import Glass from '../../asets/IconLupa.png'
import Arrows from '../../asets/Icon.png'

const Section2 = () => {
    const [user] = useAuthState(auth);

    return (
        <section className='wrapper wrapper--section-2'>
            <Title text={['wystarczą 4 proste kroki']}
                   classContainer={'section-2__decoContainer'}
                   classH2={''}
                   classUnderline={'section-2__decoration'}/>

            <div className="section-2__columns">

                <div className="section-2__column">
                    <img src={Tshirt} className="section-2__logo" alt='Tshirt logo'/>
                    <h3 className='section-2__h3'>wybierz rzeczy</h3>
                    <p className="section-2__p">
                        ubrania, zabawki, sprzęt i inne</p>
                </div>

                <div className="section-2__column">
                    <img src={Bag} className="section-2__logo" alt='Bagg logo'/>
                    <h3 className='section-2__h3'>spakuj je</h3>
                    <p className="section-2__p">
                        skrzystaj z worków na śmieci</p>
                </div>

                <div className="section-2__column">
                    <img src={Glass} className="section-2__logo" alt='Glass logo'/>
                    <h3 className='section-2__h3'>zdecyduj komu pomóc</h3>
                    <p className="section-2__p">
                        wybierz zaufane miejsce</p>
                </div>

                <div className="section-2__column">
                    <img src={Arrows} className="section-2__logo" alt='Arrows logo'/>
                    <h3 className='section-2__h3'>zamów kuriera</h3>
                    <p className="section-2__p">
                        kurier podjedzie w zaufanym terminie</p>
                </div>

            </div>

            {user?.email
                ?
                <Link to='/oddaj' className='section-2__link'>
                    <button className='btnLarge btn--section-2'
                            id='aboutUs'>
                        oddaj <br/> rzeczy
                    </button>
                </Link>
                :
                <Link to='/logowanie' className='section-2__link'>
                    <button className='btnLarge btn--section-2'
                            id='aboutUs'>
                        oddaj <br/> rzeczy
                    </button>
                </Link>
            }
        </section>
    );
};

export default Section2;