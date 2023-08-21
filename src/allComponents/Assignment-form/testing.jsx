import React, { useState } from "react";

function Calculator() {
  const [initialNUmber, setInitialNumber] = useState(0);

  const add2 = () => {
    setInitialNumber(initialNUmber + 2);
  };
  const substarct2 = () => {
    setInitialNumber(initialNUmber - 2);
  };
  const takeback = () => {
    setInitialNumber(0);
  };

  return (
    <>
      <h1>done with personal testing of usestate without bito or gpt</h1>
      <h2>add2 two/substracts 2</h2>
      <h3>Current-Number {initialNUmber}</h3>
      <button onClick={add2}>add2</button>
      <button onClick={substarct2}></button>
      <button onClick={takeback}></button>
    </>
  );
}
export default Calculator;

//thee form practice

export const Formpractice = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmited] = useState(false);

  const handleSubmitted = (event) => {
    event.preventDefault();
    setSubmited(true);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmitted}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} placeholder="Username..."
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder="Email..."
          />
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)} placeholder="Number..."
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Password..."
          />
          <input
            type="submit"
            value={submit}
            onChange={(e) => setSubmited(e.target.value)} placeholder="Submit"
          />
        </form>
        {submit && (
          <div className="the-results">
            <h1>thanks {userName} for signing up</h1>
            <p>name:{userName}</p>
            <p>email:{email}</p>
            <p>number {number}</p>
            <p>password: {password}</p>
          </div>
        )}
      </div>
    </>
  );
};

