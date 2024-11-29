import First from './First';
import Sec from './Sec';
import Landing from './Landing';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
         </Routes>
    </div>
  );
}

export default App;
