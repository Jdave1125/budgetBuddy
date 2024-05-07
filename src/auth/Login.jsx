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
        
        <div className="login">

            <h2 className="loginTitle">budgetBuddy</h2>
            <form className="logRight" onSubmit={handleLogin}>
                <div>
                    {/* <label>Email:</label> */}
                    <input
                        placeholder="Enter email here"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {/* <label>Password:</label> */}
                    <input 
                        placeholder="enter password here"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="loginButton" type="submit">LOGIN</button>
            </form>

        </div>
    )
}

export default Login;