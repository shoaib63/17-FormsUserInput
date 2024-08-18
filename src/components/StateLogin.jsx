import { useState } from "react";

export default function Login() {

  const [enteredValues , setEnteredValues] = useState({
    email: '', 
    password: '',
  });

  const [didEdit , setDidEdit] = useState({
    email: false, 
    password: false, 
  })

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');


  function hanndleInputChange(identifier,event) {
    setEnteredValues(prev=> ({
      ...prev, 
      [identifier]: event.target.value,
    }))

    setDidEdit(prev=> (
      {
        ...prev, 
        [identifier]: false,
      }
    ))
  }

  function handleSubmit(event) {
    event.preventDefatult(); 
    setEnteredValues({
      email: '', 
      password: '',
    });
  }

  function hanndleInputBlur(identifier){
    setDidEdit(prev => ({
      ...prev, 
      [identifier]: true,
    }))
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
          onChange={(event)=>hanndleInputChange('email', event)}
          onBlur={() => hanndleInputBlur('email')}/>
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>  

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
          onChange={(event)=>hanndleInputChange('password', event)}
         />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
