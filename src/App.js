import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage'
import SignUpRole from './pages/SignUpRole';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import WorkerHomePage from './pages/WorkerHomePage';
import ClientHomePage from './pages/ClientHomePage';
import GettingStarted from './components/clientComponents/GettingStarted';
import FormPage1 from './components/clientComponents/FormPage1';
import FormPage2 from './components/clientComponents/FormPage2';
import FormPage3 from './components/clientComponents/FormPage3';
import FormPage4 from './components/clientComponents/FormPage4';
import JobDetails from './components/clientComponents/JobDetails';
import MyJobs from './components/clientComponents/MyJobs';
import AllJobs from './components/clientComponents/AllJobs';
import UserProfile from './components/UserProfile';
import MessagePage from './pages/MessagePage';


function App() {
  return (
    <>
    <ToastContainer />
    <UserProvider>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/SignUp/Role' element={<SignUpRole/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/WorkerHomePage' element={<WorkerHomePage/>}/>
        <Route path='/ClientHomePage' element={<ClientHomePage/>}/>
        <Route path='/ClientHomePage/GettingStarted' element={<GettingStarted/>}/>
        <Route path='/ClientHomePage/title' element={<FormPage1/>}/>
        <Route path='/ClientHomePage/duration' element={<FormPage2/>}/>
        <Route path='/ClientHomePage/budget' element={<FormPage3/>}/>
        <Route path='/ClientHomePage/description' element={<FormPage4/>}/>
        <Route path='/ClientHomePage/review' element={<JobDetails/>}/>
        <Route path='/ClientHomePage/my-jobs' element={<MyJobs/>}/>
        <Route path='/ClientHomePage/all-jobs' element={<AllJobs/>}/>
        <Route path='/users' element={<UserProfile/>} />


      </Routes>
    </Router>
    </UserProvider>
    </>
  );
}

export default App;
