import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'; 
import SignupPage from './Pages/authentication/SignupPage';
import LoginPage from './Pages/authentication/LoginPage';
import HeroSection from './Pages/homePage/homecomponents/HeroSection';
import FeaturesSection from './Pages/homePage/homecomponents/FeaturesSection';
import Layout from './components/layout/Layout';
import HomePage from './Pages/homePage/HomePage';
import HomeLoan from './Pages/loans/homeLoan/HomeLoan';
import VehicelLoan from './Pages/loans/vehicleLoan/VehicleLoan';
import PersonalLoan from './Pages/loans/personalLoan/PersonalLoan';
import BusinessLoan from './Pages/loans/businessLoan/BusinessLoan';
import PageOne from './Pages/Forms/vehicleforms/PageOne';
import PageFour from './Pages/Forms/vehicleforms/PageFour';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/signup-Page" element={<SignupPage />} />
        <Route path="/Login-Page" element={<LoginPage/>} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/" element={<FeaturesSection />} />
        <Route path='vehicle-loan' element={<VehicelLoan/>}/>
        <Route path='home-loan' element={<HomeLoan/>}/>
        <Route path='personal-loan' element={<PersonalLoan/>}/>
        <Route path='business-loan' element={<BusinessLoan/>}/>
        <Route path='/HomePage' element={<HomePage/>} />
        <Route path='/presonal-details-formOne' element={<PageOne/>} />
        <Route path='/presonal-details-formFour' element={<PageFour/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



