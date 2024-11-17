import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import NavBar2 from './NavBar2.jsx';
import NavBar3 from './NavBar3.jsx';
import Authentication from "./Admin/Authentication.jsx";
import About from './About';
import ProtectedRoute from './ProtectedRoute.jsx';
import StudentLogin from './Student/StudentLogin.jsx';
import AddQues from './addQues/AddQues.jsx';
import Display from './DisplayTest/Display.jsx';
import Deleteques from './Admin/Deleteques.jsx';
import Logout from './Admin/LogoutA.jsx';
import SqlFetch from './Admin/sqlfetch.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isStudentAuthenticated, setIsStudentAuthenticated] = useState(false);
  const [subject, setSubject] = useState("");
  const [studentSubject, setSSubject] = useState("");
  const [studentUsername, setStudentUsername] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [studentadminUsername, setStudentAdminUsername] = useState("");

  return (
    <Router>
      {isAuthenticated ? (
        <NavBar2 />
      ) : isStudentAuthenticated ? (
        <NavBar3 />
      ) : (
        <NavBar />
      )}

      <Routes>
        {/* Routes for unauthenticated users */}
        <Route path="/" element={ isStudentAuthenticated ? (
            <Navigate to="/taketest" />
          ) : (
            <StudentLogin setIsStudentAuthenticated={setIsStudentAuthenticated} setSubject={setSSubject} setStudentUsername={setStudentUsername} setStudentAdminUsername={setStudentAdminUsername}/>
          )} />
        <Route path="/about" element={<About />} />

        {/* Routes for admin */}
        <Route path="/admin" element={
          isAuthenticated ? (
            <Navigate to="/AddQues" />
          ) : (
            <Authentication setIsAuthenticated={setIsAuthenticated} setSubject={setSubject} setAdminUsername={setAdminUsername}/>
          )
        } />
        <Route path="/AddQues" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AddQues subject={subject} username={adminUsername}/>
          </ProtectedRoute>
        } />
        <Route path="/DeleteQues" element={<Deleteques subject={subject} username={adminUsername}/>} />
        <Route path="/view" element={<SqlFetch subject={subject} username={adminUsername}/>}/>
        {/* Routes for student */}
        <Route path="/taketest" element={
          <ProtectedRoute isAuthenticated={isStudentAuthenticated}>
            <Display subject={studentSubject} username={studentUsername} admin={studentadminUsername}/>
          </ProtectedRoute>
        } />
        <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/studentlogout" element={<Logout setIsAuthenticated={setIsStudentAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;