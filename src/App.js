
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import Signup from './screens/signup.js';
import { BrowserRouter as Router , Routes , Route}  from 'react-router-dom';


import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path= '/' element ={<Home/>} />
        <Route exact path= '/login' element ={<Login/>} />
        <Route exact path= '/createuser' element ={<Signup/>} />

      </Routes>
    </div>

    </Router>
  );
}

export default App;
