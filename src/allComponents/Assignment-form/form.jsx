import React, { useState } from 'react';
import './styles.css';


export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("")
    const [submit, setSubmit] = useState(false);


  const submitForm = (props) => {
    props.preventDefault();
    setSubmit(true);
  };

  return (
    <>
     <div className='main-body'>
      <form onSubmit={submitForm} className='the-form'>
        <h1 className="sign-up-h1">Sign up</h1>
        <div className="formBody">
          <label htmlFor="name" >
            Name:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(props) => setName(props.target.value)} required
            />
          </label>

          <label htmlFor="email">
            email:
            <input
              type="email"
              id="email"
              value={email}
              onChange={(props) => setEmail(props.target.value)} required
            />
          </label>
          <label htmlFor="number">Number:
            <input type="number" id='number' onChange={(props)=>setNumber(props.target.value)}  required/>
          </label>

          <input
            type="submit"
            id="submit"
            value={submit}
            
          />
        </div>
      </form>

      
    </div>  
    {submit && (
        <div>
          <h1 >Thanks {name} for signing up!</h1>
          <p>Name: {name}</p>
          <p>Email:{email}</p>
          <p>Number:{number}</p>
        </div>
      )}

    </>
   
  );
};

export default Form;
