import { useState } from "react";

export function useInput(defaultValue , validationFn){

    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false); 

    const valueIsValid = validationFn(enteredValue);

    function hanndleInputChange(event) {
        setEnteredValue(event.target.value)
        setDidEdit(false)
    }

    function hanndleInputBlur() {
        setDidEdit(true)
    }

    return {
        value: enteredValue, 
        hanndleInputBlur, 
        hanndleInputChange,
        hasError: didEdit && !valueIsValid,
    };
}