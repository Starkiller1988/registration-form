import React, {useState} from "react";

function MultipleInputs() {

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const [records, setRecord] = useState([]);


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({... userRegistration, [name]: value });
  }

  const handleSubmit = (e) => {
        e.preventDefault();
 
      const newRecord = { ... userRegistration, id:new Date().getTime().toString() }
     console.log(records)
      setRecord([ ... records, newRecord]);
      console.log(records)

      setUserRegistration({ username:"", email:"", phone:"", password:"" })

      }



  return (
    <>
      <div className="title">
        <h1>Registration Form</h1>
      </div>

      <div className="form-container">
        <form action="" onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="username">Username</label>
            <input
            autoComplete="off"
              type="text"
              value={userRegistration.username}
              onChange={handleInput}
              name="username"
              id="username"
              placeholder="Enter Username Name..."
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
            autoComplete="off"
              type="text"
              value={userRegistration.email}
              onChange={handleInput}
              name="email"
              id="email"
              placeholder="Enter Emailadress..."
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
            autoComplete="off"
              type="text"
              value={userRegistration.phone}
              onChange={handleInput}
              name="phone"
              id="phone"
              placeholder="Enter Phone Number..."
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
            autoComplete="off"
              type="text"
              value={userRegistration.password}
              onChange={handleInput}
              name="password"
              id="password"
              placeholder="Enter Password..."
            />
          </div>

          <button type="submit">Registration</button>
        </form>
      </div>
      <div>
          {
            records.map((curElem) => {
              return (
                <div className="showDataStyle">
                  <p className="sub-title">Registered User</p>
                  <p>{curElem.username}</p>
                  <p>{curElem.email}</p>
                  <p>{curElem.phone}</p>
                  <p>{curElem.password}</p>
                </div>
              )
            })
          }
        </div>
    </>
  );
}

export default MultipleInputs;
