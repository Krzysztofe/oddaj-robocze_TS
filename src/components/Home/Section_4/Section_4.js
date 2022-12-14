import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import Title from "../../Title";
import {fetchOrganizations} from "../../FetchOperations/FetchOperations"

const WhoWeHelp = () => {

    const [printCounter, setPrintCounter] = useState(1)
    const [organisations, setOrganisations] = useState(false)
    const [loading, setLoading] = useState(true)
    const [printLoading, setPrintLoading] = useState(["loading"])
    const [error, setError] = useState(null)
    const [pageNumber, setPageNumber] = useState(0)


    useEffect(() => {

        fetchOrganizations(setOrganisations, setLoading, setError)

    }, [])

    if (loading && error) {
        return <h2 className='section4__loading'>{error}</h2>
    } else if (loading) {
        return <h2 className='section4__loading'>{printLoading}</h2>
    }

    const organisationsPerPage = 3
    const printedPage = pageNumber * organisationsPerPage


    const organisationSelection = (oganisationType, organisationTypePrinted) => {

        const filtered = organisations
            .filter(item => item.type === oganisationType)

        const displayOrganisations = filtered
            .slice(printedPage, printedPage + organisationsPerPage)
            .map((item) => {
                return <table key={item.id} className='section-4__table'>
                    <tbody>
                    <tr>
                        <td className='section-4__td'>
                            <p className='section-4__pLarge'> {organisationTypePrinted} {item.name}</p>
                            <p className='section-4__pSmall'>Cel i misja: {item.goals}</p>
                        </td>
                        <td className='td__right'>{item.stuff}</td>
                    </tr>
                    </tbody>
                </table>
            })
        return displayOrganisations
    }

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    const setPrintCounterPageNumber = (selected) => {
        setPrintCounter(selected)
        setPageNumber(0)
    }


    return (

        <section className="wrapper wrapper--section-4">

            <Title text={['komu pomagamy?']}
                   classContainer={''}
                   classH2={''}
                   classUnderline={'section-4__decoration'}/>
            <div className="section-4__btns">

                <button onClick={() => setPrintCounterPageNumber(1)}
                        className="section-4__btn">
                    Fundacjom
                </button>

                <button onClick={() => setPrintCounterPageNumber(2)}
                        className="section-4__btn">
                    Organizacjom pozarz??dowym
                </button>

                <button onClick={() => setPrintCounterPageNumber(3)}
                        className="section-4__btn">
                    Lokalnym zbi??rkom
                </button>
            </div>

            {printCounter === 1 &&
                <p className="section-4__p">
                    W naszej bazie znajdziesz list?? zweryfikowanych
                    fundacji, z kt??rymi wsp????pracujemy. Mo??esz
                    sprawdzi?? czym si?? zajmuj??, komu pomagaj?? i
                    czego potrzebuj??.
                </p>
            }

            {printCounter === 2 &&
                <p className="section-4__p">
                    Pomagamy r??wnie?? wszelkim organizacjom
                    pozarz??dowym i charytatywnym, kt??re nie
                    s?? Fundacjami. S?? to nasi Partnerzy, kt??ry
                    zrobi?? dobry po??ytek z rzeczy, kt??re do
                    nich trafi??.
                </p>
            }

            {printCounter === 3 &&
                <p className="section-4__p">
                    Wspieramy lokalne zbi??rki organizowane
                    przez indywidualne osoby, kt??rym
                    zale??y na dobru spo??eczno??ci, w kt??rej ??yj??.
                    Sam te?? mo??esz zorganizowa?? tak?? zbi??rk??
                    i pom??c tym, kt??rzy s?? najbli??ej.
                </p>
            }

            <div className='paginationContainer'>

                {printCounter === 1 &&
                    <>
                        {organisationSelection(
                            "fundacja", "fundacja")}
                        <ReactPaginate pageCount={3}
                                       onPageChange={changePage}
                                       containerClassName={'paginationButtonsContainer'}
                                       disabledClassName={'disabledButton'}
                                       activeClassName={'paginationButton__active'}
                                       previousLinkClassName={'paginationButton__previousNext'}
                                       nextLinkClassName={'paginationButton__previousNext'}/>
                    </>}

                {printCounter === 2 &&
                    <>
                        {organisationSelection(
                            "ngo", "organizacja")}
                        <ReactPaginate pageCount={2}
                                       onPageChange={changePage}
                                       containerClassName={'paginationButtonsContainer'}
                                       disabledClassName={'disabledButton'}
                                       activeClassName={'paginationButton__active'}
                                       previousLinkClassName={'paginationButton__previousNext'}
                                       nextLinkClassName={'paginationButton__previousNext'}/>
                    </>}

                {printCounter === 3 &&
                    <>
                        {organisationSelection(
                            "collection", "zbi??rka")}
                        <ReactPaginate pageCount={1}
                                       onPageChange={changePage}
                                       containerClassName={'paginationButtonsContainer'}
                                       disabledClassName={'disabledButton'}
                                       activeClassName={'paginationButton__active'}
                                       previousLinkClassName={'paginationButton__previousNext'}
                                       nextLinkClassName={'paginationButton__previousNext'}/>
                    </>}
            </div>
        </section>
    );
}

export default WhoWeHelp;
