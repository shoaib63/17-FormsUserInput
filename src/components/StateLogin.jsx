import { useState } from "react";
import { Input } from './Input'

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

  function hanndleInputChange(identifier, event) {
    setEnteredValues(prev => ({
      ...prev,
      [identifier]: event.target.value,
    }))

    setDidEdit(prev => (
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

  function hanndleInputBlur(identifier) {
    setDidEdit(prev => ({
      ...prev,
      [identifier]: true,
    }))
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" name="email" type='email'
          onChange={(event) => hanndleInputChange('email', event)}
          onBlur={() => hanndleInputBlur('email')}
          error="Please enter a valid email address."
        />

        <Input label="Password" id="password" name="password" type='password'
          onChange={(event) => hanndleInputChange('password', event)}
          onBlur={() => hanndleInputBlur('password')}
          error="Please enter a valid password"
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
