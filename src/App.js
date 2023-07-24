import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage'
import SignUpRole from './pages/SignUpRole';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';


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
        {/* <Route path='/WorkHomePage' element={<WorkHomePage/>}/> */}
      </Routes>
    </Router>
    </UserProvider>
    </>
  );
}

export default App;
