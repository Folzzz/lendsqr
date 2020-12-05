export default function ValidateInfo (values) {
    let errors = {}

    // email
    if(!values.email.trim()){
        errors.email = "Email required"
    } else if(!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }

    // password
    if(!values.password){
        errors.password = "Password required"
    }

    return errors;
}