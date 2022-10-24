import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Libraries/FireBaseConfig';
import Title from "../Title";
import ButtonsLogin from "./ButtonsLogin";
import {loginValidation} from "../Libraries/libraryValidations";


const Login = () => {

    const navigate = useNavigate()
    const [inputValueLogin, setInputValueLogin] =
        useState({email: "", password: ""})
    const [errors, setErrors] = useState('')

    const handleChange = (e) => {
        setInputValueLogin({
            ...inputValueLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setErrors(loginValidation(inputValueLogin))
        if(loginValidation(inputValueLogin).length > 0){
            return
        }

        signInWithEmailAndPassword(
            auth,
            inputValueLogin.email,
            inputValueLogin.password
        )
            .then(() => navigate('/'))
            .catch(error => setErrors(error.code))
    }

    return (
        <>
            <div className='headerSpacer'></div>
            <form onSubmit={handleLogin}
                  className='wrapper wrapper--login'>

                <Title text={['zaloguj się']}
                       classContainer={''}
                       classH2={''}
                       classUnderline={'login__underline'}/>

                <div className="login__inputs">
                    <label className='login__label'>
                        Email
                        <input
                            type='text' name='email'
                            value={inputValueLogin.email}
                            onChange={handleChange}
                            className='login__input'/>
                    </label>

                    <label className='login__label'>
                        Hasło
                        <input
                            type='password' name='password'
                            value={inputValueLogin.password}
                            onChange={handleChange}
                            className='login__input'/>
                    </label>
                </div>

                <p className='login__errors'>{errors}</p>

                <ButtonsLogin link={'/rejestracja'}
                    btnRight='załóż konto'
                    btnLeft='zaloguj się'/>
            </form>
        </>
    );
};

export default Login;