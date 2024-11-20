import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from './Pages/authentication/SignupPage';
import LoginPage from './Pages/authentication/LoginPage';
import VehicleLoanPage from './Pages/loans/VehicleLoanPage';
import HomePage from './Pages/Home/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/vehicle-loan' element={<VehicleLoanPage/>} />
      </Routes>
    </Router>
  );
}

export default App;



