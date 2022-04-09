import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
const auth = getAuth(app);

const Login = () => {
    let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

    
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from, { replace: true });

        })
    }
    return (
        <div>
            <h3>please login</h3>
            
            <div style={{margin:"10px"}}>
                    <button onClick={handleGoogleSignIn} >login with google</button>
                </div>
            <form  >
                
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" placeholder='your password' />
                <br />
                <input type="submit" value="login" />

            </form>
        </div>
    );
};

export default Login;