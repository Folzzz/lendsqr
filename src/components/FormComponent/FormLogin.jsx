import React, {useState} from 'react';

import useForm from '../../useForm';
import Validate  from '../../ValidateInfo';

import './form.css';

const FormLogin = ({submitForm}) => {

    const {handleSubmit, handleChange, values, errors} = useForm(submitForm, Validate)

    const [isShowPassword, setIsShowPassword] = useState(false)

    const togglePasswordShow = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <div className="form-page">
            <div className="form-top">
            <img src="../../img/logo.svg" alt="company identity"/>
            </div>

            <div className="form-content">
                <div className="form-content-left">
                    <img src="../../img/pablo-sign-in 1.svg" alt=""/>
                </div>

                <div className="form-content-right">
                    <form action="" className="form" onSubmit={handleSubmit}>

                        <div className="form-heading">
                            <h1 className="">Welcome!</h1>
                            <p>Enter details to login</p>

                        </div>

                        <div className="form-inputs">
                            <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            className="form-input"
                            
                            value={values.email}
                            onChange={handleChange}

                            
                            />
                            {errors.email && <p className="form-error">{errors.email}</p>}
                        </div>
                        <div className="form-inputs password-input">
                            <input 
                            type={isShowPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password" 
                            className="form-input"
                            
                            value={values.password}
                            onChange={handleChange}

                            
                            />
                            <p className="password-show" onClick={togglePasswordShow}>show</p>

                            {errors.password && <p className="form-error">{errors.password}</p>}
                            
                        </div>
                        <p className="password-forget">FORGOT PASSWORD?</p>

                            <button type="submit" className="form-input-btn">LOG IN</button>
                    </form>
                </div>
            </div>
        
        </div>
    )
}

export default FormLogin
