import { useState } from 'react';
import Profilepage from './Profilepage';

const Loginpage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loginSuccess, setloginSuccess] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleClear = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  };

  
  const handleLogin = () => {
    if (username === 'test' && email === 'test@gmail.com' && password === 'test@123') {
      setloginSuccess(true);
    } else {
      setLoginFailed(true);
    }
  };

    if (loginSuccess) {
    return <Profilepage />;
  } 

  if (loginFailed) {
    return <>
    <h1>Profile Not Found</h1>
    </>
  }
    
  return (
    <div className="login-container">
        <br/><br/>
        <label >Username : </label>
        <input id='Username' type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
        <br/>
        <label >Email : </label>
        <input id='Email' type="email" value={email} placeholder='absd@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <label >Password : </label>
        <input id='Password' type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Loginpage