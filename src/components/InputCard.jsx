import { useState } from "react";

import '../style/card.css';


const CustomInput = ({label, value, type, placeholder, name, onChange}) => (
    <div className="input-container">
        <label>
             <p>{label || '/'}</p>
             <input
                 type={type || 'text'}
                 value={value}
                 placeholder={placeholder || ''}
                 name={name}
                 onChange={e => onChange(e, name)}
             />
         </label>
    </div>
)

const InputCard = ({handleSubmit}) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })

    const handelChange = (e, name) => {
        let value = e?.target?.value;
        setValues((prev) => ({...prev, [name]: value}))
    }

    const checkForm = (e) => {
        e.preventDefault();

        for (const value in values) {
            if(!values[value] || values[value].trim().length === 0){
              alert('Fill all data!');
              return;
            } 
        }

        resetValues();
        handleSubmit(values);

    }

    const resetValues = () => {
        setValues({
            firstName: '',
            lastName: '',
            street: '',
            city: ''
        })
    }

    return(
        <form onSubmit={e => checkForm(e)}>
            <CustomInput 
                value={values.firstName}
                placeholder="First name"
                name="firstName"
                label="First name"
                onChange={handelChange}
            />
            <CustomInput 
                value={values.lastName}
                placeholder="Last name"
                name="lastName"
                label="Last name"
                onChange={handelChange}
            />
            <CustomInput 
                value={values.street}
                placeholder="Street"
                name="street"
                label="Street"
                onChange={handelChange}
            />
            <CustomInput 
                value={values.city}
                placeholder="City"
                name="city"
                label="City"
                onChange={handelChange}
            />
           <input className="btn" type="submit" value="Insert" />
        </form>
    )
}

export default InputCard;