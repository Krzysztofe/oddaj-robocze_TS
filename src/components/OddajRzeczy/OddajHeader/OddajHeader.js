import Title from "../../Title";
import Square from "./Square";
import ImageSmall from "../../../asets/Header-Form-Background.png"
import ImageLarge from '../../../asets/Header-Form-Background@2x.png'

const OddajHeader = ({counter}) => {

    return (
        <>
            <div className='headerSpacer'></div>
            <header className='wrapper wrapper--oddajHeader'>
                <img src={ImageSmall} alt='sweter' className='oddajHeader__imgSmall'/>
                <img src={ImageLarge} alt='sweter' className='oddajHeader__imgLarge'/>
                <aside className="oddajHeader__rightContainer">

                    <Title text={["oddaj rzeczy, których nie chcesz", "potrzebującym"]}
                           classContainer={'oddajHeader__titleContainer'}
                           classH2={'oddajHeader__titleH2'}
                           classUnderline={'oddajHeader__titleDecoration'}/>

                    <p className='oddajHeader__p'> wystarczą 4 proste kroki </p>

                    <div className="squares">

                        <Square number='1'
                                text='wybierz rzeczy'
                                counter={counter}/>

                        <Square number='2'
                                text='spakuj w worki'
                                counter={counter}/>

                        <Square number='3'
                                text='wybierz fundację'
                                counter={counter}/>

                        <Square number='4'
                                text='zamów kuriera'
                                counter={counter}/>

                    </div>
                </aside>
            </header>
        </>
    );
};

export default OddajHeader;