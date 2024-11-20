import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from './Pages/authentication/SignupPage';
import LoginPage from './Pages/authentication/LoginPage';
import VehicleLoanPage from './Pages/loans/VehicleLoanPage';
import Layout from './components/layout/Layout';
import HomePage from './Pages/homePage/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/vehicle-loan' element={<VehicleLoanPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



