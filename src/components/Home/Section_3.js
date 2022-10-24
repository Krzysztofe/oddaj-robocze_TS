import Title from "../Title";
import SignatureSmall from '../../asets/Signature.png'
import SignatureLarge from '../../asets/Signature@2x.png'
import PeopleSmall from '../../asets/People.png'
import PeopleLarge from '../../asets/People@2x.png';


const Section_3 = () => {
    return (
        <section className="wrapper wrapper--section-3">
            <aside className="section-3__leftContainer">
                <div className="section-3__mainText">
                    <Title text={['o nas']}
                           classContainer={''}
                           classH2={''}
                           classUnderline={'section-3__decoration'}/>
                    <p className="section-3__p" id='whoWeHelp'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis minima quia ullam unde?
                        Aliquid blanditiis ea esse hic libero, nobis nostrum quod reiciendis.
                    </p>
                    <img src={SignatureSmall}
                         alt='Podpis'
                         className="section-3__signatureSmall"/>
                    <img src={SignatureLarge}
                         alt='Podpis'
                         className="section-3__signatureLarge"/>
                </div>
            </aside>

            <img src={PeopleSmall}
                 alt='Grupa ludzi'
                 className='section-3__peopleSmall'/>
            <img src={PeopleLarge}
                 alt='Grupa ludzi'
                 className='section-3__peopleLarge'/>
        </section>
    );
};

export default Section_3;