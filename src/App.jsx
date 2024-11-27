import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from './Pages/authentication/SignupPage';
import LoginPage from './Pages/authentication/LoginPage';
import HeroSection from './Pages/homePage/homecomponents/HeroSection';
import FeaturesSection from './Pages/homePage/homecomponents/FeaturesSection';
import VehicleLoanPage from './Pages/loans/VehicleLoanPage';
import Layout from './components/layout/Layout';
import HomePage from './Pages/homePage/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/signup-Page" element={<SignupPage />} />
        <Route path="/Login-Page" element={<LoginPage/>} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/" element={<FeaturesSection />} />
        <Route path='/vehicle-loan' element={<VehicleLoanPage/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;



