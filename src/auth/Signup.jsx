import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const nav = useNavigate();

    const handleSignup =(e)=>{
        e.preventDefault();
        localStorage.setItem('isLoggedIn','true');
        nav('/dashboard')
    }

    return (
        <div className='signup'>
          <h2 className='loginTitle'>budgetBuddy</h2>
          <form onSubmit={handleSignup}>
            <div>
              {/* <label>Email:</label> */}
              <input
                placeholder='whats your email?'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              {/* <label>Password:</label> */}
              <input
                placeholder='create a password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="loginButton" type="submit">Sign Up</button>
          </form>
        </div>
      );
}

export default Signup;