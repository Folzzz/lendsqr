import {useState, useEffect} from 'react'

const useForm = (callback, Validate) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(Validate(values))
        setIsSubmitting(true)
        // alert('hey jiggy')
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    },[errors])

    return {handleSubmit, handleChange, values, errors }

}

export default useForm;