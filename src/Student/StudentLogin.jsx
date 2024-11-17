import React, { useState } from "react";
import './StudentLogin.css';

function StudentLogin({ setIsStudentAuthenticated, setSubject, setStudentUsername, setStudentAdminUsername }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [subject, setSubject1] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [admin, setAdmin] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const check = () => {
    setIsLoading(true);
    fetch('http://localhost/api/api/StudentLogin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uname: username,
        pass: password,
      }),
    })
      .then(response => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success) {
          setIsStudentAuthenticated(true);
          setSubject(subject);
          setStudentUsername(username);
          setStudentAdminUsername(admin);
          //console.log(subject);
        } else {
          alert("Invalid username or password");
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error("Error:", error);
      });
  };

  const singUp = () => {
    setIsLoading(true);
    fetch('http://localhost/api/api/StudentSignup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.log(response);
        console.error("Error:", error);
      });
  }

  return (
    <div className="form-container1">
      {isLoading && <p>Loading...</p>}
      <div className="form-toggle">
        <button
          className={`toggle-btn ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`toggle-btn ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>
      {isLogin ? (
        <div className="form1">
          <h2>Login Form</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            check();
          }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            /><br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br />
            <input
              type="text"
              placeholder="Admin username"
              value={admin}
              onChange={(e) => setAdmin(e.target.value)}
              required
            /><br />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject1(e.target.value)}
              required
            /><br />
            <button type="submit">{isLoading ? 'Loading...' : 'Login'}</button>
            <p>
            Not a member? <a><span onClick={toggleForm} className="toggle-link">Signup now</span></a>
          </p>
          </form>
        </div>
      ) : (
        <div className="form2">
          <h2>Signup Form</h2>
          <form onSubmit={(e) => {
          e.preventDefault();
          if(password === confirmpassword) {
            singUp();
          }
          else {
            alert("Passwords do not match");
          }
        }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUserName(e.target.value)}
            required
          /><br/>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          /><br/>
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmpassword}  
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required
          /><br/>
          <button type="submit">{isLoading ? 'Loading...' : 'Sign Up'}</button>
        </form>
        </div>
      )}
    </div>
  );
}

export default StudentLogin;



