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
import DoctorLandingPage from './Doctor-Components/Doctor-landing-page';
import { useState } from 'react';
import Protected from './Navbar-Components/Protected';
import PatientNavbar from './Patient-Components/patient-navbar';
import PatientLandingPage from './Patient-Components/Patient-landing-page';
import DoctorNavbar from './Doctor-Components/Doctor-navbar';
import ApproveDoctor from './Admin-Components/Approve-doctor';
import ShowProfilePatient from './Patient-Components/ShowProfielPatient';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <div className='App'>
    <Routes>
      <Route path='/patients' element={<GetPatients/>}></Route>
      <Route path='/doctors' element={<GetDoctors/>}></Route>
      <Route path='/patient' element={<PatientRegister/>}></Route>
      <Route path='/doctor' element={<DocterRegister/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/registerlanding' element={<RegisterLandingPage/>}></Route>
      <Route path='/adminnavbar' element={<AdminNavbar/>}></Route>
      <Route path='/home/patient/landingpage' element={<PatientLandingPage/>}></Route>
      <Route path='/home/patient' element={<PatientNavbar/>}></Route>
      <Route path='/home/doctor' element={<DoctorNavbar/>}></Route>
      <Route path='/home/approve' element={<ApproveDoctor/>}></Route>
      <Route path='/home/profile/patient' element={<ShowProfilePatient/>}></Route>
    </Routes>
    </div>

  );
}

export default App;
