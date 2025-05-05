import { useState } from "react";



const useForm = (initialvalue, validators) => {
    const [values, setValues] = useState(initialvalue)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

       if (validators[name]){
        const error = validators[name](value)
        setErrors({...errors, [name] : error || ""})
       }
    }

    const isValid = () => {
        let valid = true;
        const newErrors = {};
        for (const key in validators){
            const val = values[key];
            const error = validators[key](val);
        if(error){
            valid = false;
            newErrors[key] = error;
        }

        }
        setErrors(newErrors)
        return valid;
    }
    return{values, errors, handleChange, isValid}
}

export default useForm
