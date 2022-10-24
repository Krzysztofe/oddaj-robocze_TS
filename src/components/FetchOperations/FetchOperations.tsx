import React, {SetStateAction} from "react"
import {IFormData} from "../Home/Section_5/Section_5_Form";


const URL_ORGANIZATIONS =
    'https://my-json-server.typicode.com/Krzysztofe/oddaj_api/organisations'
const URL_USERS =
    "https://my-json-server.typicode.com/Krzysztofe/oddaj_api/user"


export const fetchOrganizations =
        (setOrganisations: React.Dispatch<React.SetStateAction<{ id: number | null, type: string, name: string, goals: string, stuff: string }[]>>,
    setLoading: React.Dispatch<SetStateAction<boolean>>,
setError: React.Dispatch<React.SetStateAction<string | null>>)
: void => {

    fetch(URL_ORGANIZATIONS)
        .then(resp => {
                if (!resp.ok) {
                    throw Error('Brak dostępu do zasobu')
                }
                return resp.json()
            }
        )
        .then(data => {
                setOrganisations(data)
                setLoading(false)
            }
        )
        .catch(err =>
            setError(err.message === 'Failed to fetch' ?
                'Brak połączenia z serwerem' :
                err.message))
}



export const postUser = (formData: IFormData,
    setFetchErrors: React.Dispatch<React.SetStateAction<string | null>>)
: void => {

    fetch(URL_USERS,
        {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            throw Error('Nie znaleziono metody zapisu')
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => setFetchErrors(err.message === 'Failed to fetch' ?
            'Brak połączenia z serwerem' :
            err.message))
}