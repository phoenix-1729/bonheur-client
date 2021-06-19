import React, { useState ,useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App';

const Signin = () => {
    const {state,dispatch} = useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                email: email, password: password
            })
        });

        const data = await res.json();
        console.log(data);
        console.log(res.status);

        if (res.status === 400 || !data) {
            window.alert("Invalid Login");
            console.log("Invalid Login");
        } else {
            dispatch({ type: "USER", payload: true });
            window.alert("Successfull Login");
            console.log("Successfull Login");

            history.push("/");
        }

    }
    return (
        <>
            <div className="back">
                <div id="container">
                    <div id="loginform">
                        <h2 id="headerTitle">
                            Login
                        </h2>

                        <form method="POST">
                            <div className="row">
                                <label >
                                    Username
                                </label>
                                <input type="email" name="email" autoComplete="off" value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder="Enter your username" />
                            </div>
                            <div className="row">
                                <label >
                                    Password
                                </label>
                                <input type="password" name="password" autoComplete="off" value={password}
                                    onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                            </div>
                            <div className="row" id="button">
                                <button name="signin" onClick={loginUser} >Login</button>
                            </div>
                        </form>
                        <div id="alternativeLogin">
                            <label >Or Sign in with:  </label>
                            <div id="iconGroup">
                                <a href="" id="facebookIcon"></a>
                                <a href="" id="twitterIcon"></a>
                                <a href="" id="googleIcon"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signin;