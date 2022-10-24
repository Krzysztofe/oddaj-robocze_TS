import React, {useState, ChangeEvent, FormEvent} from "react";
import {section_5_FormValidation} from '../../Libraries/libraryValidations'
import {postUser} from '../../FetchOperations/FetchOperations'

interface IInputValue {
    name: string;
    email: string;
    message: string;
}

interface IErrors {
    name: string;
    email: string;
    message: string;
}

export interface IFormData{
    name: string;
    email: string;
    message: string;
}


const Section_5 = () => {

    const [inputValue, setInputValue] = useState<IInputValue>({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState<IErrors>({
        name: "",
        email: "",
        message: ""
    })

    const [formData, setFormData] = useState<IFormData>({
        name: "",
        email: "",
        message: ""
    })

    const [fetchErrors, setFetchErrors] = useState <null | string> (null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        setErrors(section_5_FormValidation(inputValue))

        if (section_5_FormValidation(inputValue).name !== '' ||
            section_5_FormValidation(inputValue).message !== '' ||
            section_5_FormValidation(inputValue).email !== '') {
            return
        }

        setFormData(inputValue)
        postUser(formData, setFetchErrors)
        setInputValue({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                  className='contactForm'>

                <div className="contactForm__inputContainer">
                    <label className='contactForm__label'>
                        Wpisz swoje imię
                    </label>
                    <input type='text' name='name'
                           value={inputValue.name}
                           onChange={handleChange}
                           className={`contactForm__input
                       ${errors.name && 'contactForm__errorUnderline'}`}
                           placeholder='Imię'/>
                    <div className="contactForm__textInputErrors">
                        {errors.name}
                    </div>
                </div>

                <div className="contactForm__inputContainer">
                    <label className='contactForm__label'>
                        Wpisz swój email
                    </label>
                    <input type='text' name='email'
                           value={inputValue.email}
                           onChange={handleChange}
                           className={`contactForm__input
                       ${errors.email && 'contactForm__errorUnderline'}`}
                           placeholder='Email'/>
                    <div className="contactForm__textInputErrors">
                        {errors.email}
                    </div>
                </div>

                <div className="contactForm__inputContainer
            contactForm__inputContainer--textarea">
                    <label className='contactForm__label'>
                        Wpisz swoją wiadomość
                    </label>
                    <textarea name='message'
                              value={inputValue.message}
                              onChange={handleChange}
                              className={`contactForm__input
                    ${errors.message && 'contactForm__errorUnderline'}`}
                              rows={4}
                              placeholder='Wiadomość'/>
                    <div className="contactForm__textInputErrors">
                        {errors.message}
                    </div>
                </div>

                <button className='btnLarge btnLarge--cntactForm'>
                    wyślij
                </button>
            </form>

            <h2 className='fetchErrors'>
                <span className='fetchErrors__opacity'>r</span>
                {fetchErrors}
            </h2>
        </>
    );
};

export default Section_5;