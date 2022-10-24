import {IInputValueRregister} from "../Login/Register";


interface IInputsValue {
    name: string,
        email: string,
        message: string
}

interface I_errors {
    name:string,
        email: string,
        message: string
}

export const section_5_FormValidation = (inputValue:IInputsValue) : I_errors=> {

    const _errors = {name: '', email: '', message: ''}
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    if (inputValue.name.includes(' ') || !inputValue.name) {
        _errors.name = 'imię powinno być jednym wyrazem'
    }
    if (!inputValue.email) {
        _errors.email = 'podaj email'
    } else if (!reg.test(inputValue.email)) {
        _errors.email = "email jest nieprawidłowy"}

    if (inputValue.message.length < 2) {
        _errors.message = 'wiadomość minimum dwa znaki'
    }
    return _errors
}


export const registerValidation = (inputValuRregister: IInputValueRregister)
:string | string[] => {

    const _errors: string[] = []
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;


    if (!inputValuRregister.email) {
        _errors.push('podaj email')
    } else if (!reg.test(inputValuRregister.email)){
        _errors.push('email jest nieprawidłowy')
    }

    if (inputValuRregister.password.length < 6) {
        _errors.push('hasło musi mieć conajmniej 6 znaków')
    }
    if (inputValuRregister.passwordRepeated !== inputValuRregister.password ||
        !inputValuRregister.passwordRepeated) {
        _errors.push("hasła muszą być takie same")
    }
    if (_errors.length > 0) {
        return _errors.join(', ').concat('.')
    }
    return ""
}

interface valueLogin{
    email:string,
        password: string
}

export const loginValidation = (inputValueLogin: valueLogin)
: string | string[] => {

    const _errors: string[] = []
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;


    if (!inputValueLogin.email) {
        _errors.push('podaj email')
    } else if (!reg.test(inputValueLogin.email)){
        _errors.push('email jest nieprawidłowy')
    }

    if (inputValueLogin.password.length < 6) {
        _errors.push('hasło musi mieć conajmniej 6 znaków')
    }
    if (_errors.length > 0) {
        return _errors.join(', ').concat('.')
    }
    return ""
}
