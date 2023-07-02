import logo from './logo.svg';
import './App.css';
import Login from './Shared-Components/Login';
import DocterRegister from './Doctor-Components/Doctor-Register';
import PatientRegister from './Patient-Components/Patient-Register';
import GetDoctors from './Shared-Components/GetDoctors';
import GetPatients from './Shared-Components/GetPatients';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterLandingPage from './Shared-Components/Register-landing';
import AdminNavbar from './Navbar-Components/Admin-navbar';
import LandingPage from './Shared-Components/Landing-page';
import PatientLandingPage from './Patient-Components/Patient-landing-page';
import DoctorLandingPage from './Doctor-Components/Doctor-landing-page';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn ] = useState(true)
  const toggleRoute = () =>{
    setLoggedIn(!loggedIn)
  }
  return (
    <div className='App'>
    <Routes>
      <Route path='/patients' element={<GetPatients/>}></Route>
      <Route path='/doctors' element={<GetDoctors/>}></Route>
      <Route path='/patient' element={<PatientRegister/>}></Route>
      <Route path='/doctor' element={<DocterRegister/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registerlanding' element={<RegisterLandingPage/>}></Route>
      <Route path='/adminnavbar' element={<AdminNavbar/>}></Route>
      <Route path='/home' element={<LandingPage/>}></Route>
      <Route path='/home/patient' element={<PatientLandingPage/>}></Route>
      <Route path='/home/doctor' element={<DoctorLandingPage/>}></Route>
    </Routes>
    </div>

  );
}

export default App;
