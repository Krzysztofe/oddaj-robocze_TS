import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Libraries/FireBaseConfig";
import {Link} from "react-router-dom";
import OddajMain from "./OddajMain";
import Title from "../Title";

const ProtectedRouteOddajMain = () => {
    const [user] = useAuthState(auth);

    if (!user?.email) {
        return (
            <>
                <div className='headerSpacer'></div>
                <main className='wrapper wrapper--login'>
                    <Title text={['zaloguj się']}
                           classContainer={''}
                           classH2={''}
                           classUnderline={'login__underline'}/>
                    <Link to='/'>
                        <button className='buttonLogin'>strona główna</button>
                    </Link>
                </main>
            </>
        )
    }
    return (
        <OddajMain/>
    );
}

export default ProtectedRouteOddajMain;