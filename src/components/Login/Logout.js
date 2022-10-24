import {Link} from "react-router-dom";
import Title from "../Title";

const Logout = () => {
    return (
        <>
            <div className='headerSpacer'></div>
            <main className='wrapper wrapper--login'>
                <Title text={['wylogowanie nastąpiło', 'pomyślnie']}
                       classContainer={''}
                       classH2={''}
                       classUnderline={'login__underline'}
                />
                <Link to='/'>
                    <button className='buttonLogin'>strona główna</button>
                </Link>

            </main>
        </>
    );
};

export default Logout;