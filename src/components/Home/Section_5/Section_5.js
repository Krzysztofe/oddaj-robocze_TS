import Form from './Section_5_Form'
import Title from "../../Title";

const Section_5 = () => {
    return (
        <section className="wrapper wrapper--section-5" id='contact'>
            <div className="section-5__opacity">
                <aside className="section-5__right">
                    <Title text={['skontaktuj się z nami']}
                        classUnderline={'section-5__decoration'}/>
                    <Form/>
                </aside>
            </div>
        </section>
    );
};

export default Section_5;