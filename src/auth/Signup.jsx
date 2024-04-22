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
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
}

export default Signup;