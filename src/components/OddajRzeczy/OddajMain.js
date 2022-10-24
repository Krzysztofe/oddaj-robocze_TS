import {useContext} from "react";

import OddajHeader from "./OddajHeader/OddajHeader";
import OddajBelt from "./Belt";

import OddajFormTop from "./OddajForms/OddajFormTop";
import OddajForm2 from "./OddajForms/OddajForm2";
import OddajForm1 from "./OddajForms/OddajForm1";
import OddajForm3 from "./OddajForms/OddajForm3";
import OddajForm4 from "./OddajForms/OddajForm4";
import OddajSummary from "./OddajForms/OddajSummary";
import OddajThanx from "./OddajForms/OddajThanx";
import Section_5 from "../Home/Section_5/Section_5";
import Footer from "../Home/Footer";
import {GlobalContext} from "./Context/GlobalContextProv";

const OddajMain = () => {

    const {counter} = useContext(GlobalContext)

    return (
        <>
            <OddajHeader counter={counter}/>

            {counter === 1 &&
                <>
                    <OddajBelt text='Uzupełnij szczegóły dotyczace
                       twoich rzeczy. Dzięki temu bedziemy wiedzieć
                       komu najlepiej je przekazać.'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 1/4', 'zaznacz co chcesz oddać:']}/>
                        <OddajForm1/>
                    </main>
                </>
            }

            {counter === 2 &&
                <>
                    <OddajBelt text='Wszytie rzeczy do oddania
                        zapakuj w 60l worki. Dokładną
                        instrukcję jak poprawnie spakować
                        rzczy znajdziesz TUTAJ '/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 2/4', 'podaj liczbę 60 l. worków,' +
                            ' w które spkowałeś/aś rzeczy:']}/>
                        <OddajForm2/>
                    </main>
                </>
            }

            {counter === 3 &&
                <>
                    <OddajBelt text='Jeśli wiesz komu chcesz pomóc,
                        możesz wpisać nazwę organizacji w wyszukiwarce.
                        Możesz też filtrować organizacje po ich lokalizacji
                        bądź celu ich pomocy'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 3/4', 'lokalizacja:']}/>
                        <OddajForm3/>
                    </main>
                </>
            }

            {counter === 4 &&
                <>
                    <OddajBelt text='Podaj adres oraz termin odbioru rzeczy'/>

                    <main className="wrapper wrapper--oddajMain">
                        <OddajFormTop
                            text={['krok 4/4', 'podaj adres oraz termin ' +
                            'odbioru rzeczy przez kuriera:']}/>
                        <OddajForm4/>
                    </main>
                </>
            }

            {counter === 5 &&
                <>
                    <main className="wrapper wrapper--oddajMain">
                        <div className="belt__empty"></div>
                        <OddajFormTop
                            text={['i', 'podsumowanie twojej darowizny']}/>
                        <OddajSummary/>
                    </main>
                </>
            }

            {counter === 6 &&
                <main className="wrapper wrapper--oddajMain">
                    <div className="belt__empty"></div>
                    <OddajFormTop
                        text={['i', '']}/>
                    <OddajThanx/>
                </main>
            }
            <Section_5/>
            <Footer/>
        </>
    );
}
export default OddajMain;