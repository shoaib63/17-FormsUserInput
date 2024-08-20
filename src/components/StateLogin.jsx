import { useState } from "react";
import  Input  from './Input';
import { isEmail , isNotEmpty , hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {

  const {
    value: emailValue,
    hanndleInputChange: handleEmailChange, 
    hanndleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('' , (value)=> isEmail(value) && isNotEmpty(value));


  const {
    value: passwordValue, 
    handleEmailChange: handlePasswordChange,
    hanndleInputBlur: handlePasswordBlur, 
    hasError: passwordHasError
  } = useState('', (value)=>hasMinLength(value,6) );

  function handleSubmit(event) { 
    event.preventDefatult();
    
    if( emailHasError || passwordHasError)
      return; 

    console.log(emailValue , passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" name="email" type='email'
          onChange={handleEmailChange  }
          onBlur={handleEmailBlur}
          value ={emailValue}
          error={ emailHasError && "Please enter a valid email address."}
        />

        <Input label="Password" id="password" name="password" type='password'
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value ={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
