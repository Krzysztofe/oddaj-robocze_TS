import {Link} from 'react-router-dom'

const ButtonsLogin = ({link, btnRight, btnLeft}) => {
    return (

        <div className="buttonsLogin">

            <Link to={link}>
                <button className='buttonLogin'>
                    {btnRight}
                </button>
            </Link>

            <button type='submit'
                    className='buttonLogin'>
                {btnLeft}
            </button>

        </div>
    );
};

export default ButtonsLogin;