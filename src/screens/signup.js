import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });

  const functionHandle = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
    });
    // You can handle the response here
    const json  = await response.json();
    console.log(json);
  };

  const onChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'name') {
      console.log(credentials);
      setCredentials({ ...credentials, name: e.target.value });
    } else if (e.target.name === 'password') {
      console.log(credentials);
      setCredentials({ ...credentials, password: e.target.value });
    } else if (e.target.name === 'email') {
      console.log(credentials);
      setCredentials({ ...credentials, email: e.target.value });
    } else if (e.target.name === 'location') {
      console.log(credentials);
      setCredentials({ ...credentials, location: e.target.value });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <form onSubmit={functionHandle}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={onChange}  value ={credentials.name}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} value ={credentials.email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={onChange} value ={credentials.password}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
            <input type="text" className="form-control" id="location" name="location" onChange={onChange} value ={credentials.location} />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
          <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
        </form>
      </div>
    </>
  );
}
