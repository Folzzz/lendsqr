import React, {useState} from 'react'
import DashboardPage from '../../Pages/DashboardPage'
import Header from '../HeaderComponent/Header'
import FormLogin from './FormLogin'
import FormValid from './FormValid'

const Form = () => {
    const [submitted, setSubmitted] = useState(false)

    function submitForm(){
        setSubmitted(true)
    }

    return (
        <div>
            {/* <FormLogin /> */}
            {!submitted ? 
            (<FormLogin submitForm={submitForm}/>) : 
            (<DashboardPage />)}
        </div>
    )
}

export default Form
