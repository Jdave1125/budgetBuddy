import {useState} from "react";
import {useNavigate} from 'react-router-dom'

const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const nav = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        //for front end we can do this, but when integrating backend we can switch the auth logic//
        const isLoggedIn = localStorage.getItem('isLoggedIn','true');
        if(isLoggedIn){
            nav('/dashboard');
        } else {
            nav('/signup');
        }
    };


    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">LOGIN</button>
            </form>

        </div>
    )
}

export default Login;