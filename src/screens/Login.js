import {React,useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Login() {
  const [credentials, setCredentials] = useState({  email: "", password: ""});
  
  let navigate = useNavigate();
  const functionHandle = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password})
    });
    // You can handle the response here
   
    const json  = await response.json();
    console.log(json);
    if(json.success)
    {
      localStorage.setItem("authToken",json.authToken)
      localStorage.getItem("authToken");
      navigate('/');
    }
  };

  const onChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'password') {
      console.log(credentials);
      setCredentials({ ...credentials, password: e.target.value });
    } else if (e.target.name === 'email') {
      console.log(credentials);
      setCredentials({ ...credentials, email: e.target.value });
    } 
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <form onSubmit={functionHandle}>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} value ={credentials.email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={onChange} value ={credentials.password}/>
          </div>
         

          <button type="submit" className="btn btn-success">Submit</button>
          <Link to='/createuser' className='m-3 btn btn-danger'>I am a new User</Link>
        </form>
      </div>
    </div>
  )
}
