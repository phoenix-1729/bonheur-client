import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Signup = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("https://bonheur-memories-server.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, email: email, phone: phone, work: work, password: password, cpassword: cpassword
            })
        });

        const data = await res;
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Successfull Registration");
            console.log("Successfull Registration");

            history.push("/Signin");
        }
    }

    return (
        <>
            <div className="back">

                <div id="container">
                    <div className="main-box">
                        <div className="top-buttons">
                            <button className="to-signup top-active-button">
                                Sign Up
                            </button>
                            <NavLink to="/signin">
                                <button className="to-signin">
                                    Sign In
                                </button>
                            </NavLink>
                        </div>
                        <div className="signup_form form-signup">
                            <form >
                                <lable>FULL NAME</lable>
                                <input className="signup_form_form_input" type="text"
                                    name="name"
                                    value={user.name} onChange={handleInputs}
                                    autocomplete="off" placeholder="Your full name" />

                                <lable>E-MAIL</lable>
                                <input className="signup_form_form_input" type="email"
                                    name="email"
                                    value={user.email} onChange={handleInputs}
                                    autocomplete="off" placeholder="Your E-mail" />

                                <lable>PHONE NUMBER</lable>
                                <input className="signup_form_form_input" type="phone"
                                    name="phone"
                                    value={user.phone} onChange={handleInputs}
                                    autocomplete="off" placeholder="Your Phone Number" />

                                <lable>PROFFESSION</lable>
                                <input className="signup_form_form_input" type="text"
                                    name="work"
                                    value={user.work} onChange={handleInputs}
                                    autocomplete="off" placeholder="Your Proffession" />

                                <lable>PASSWORD</lable>
                                <input className="signup_form_form_input" type="password"
                                    name="password"
                                    value={user.passwaord} onChange={handleInputs}
                                    autocomplete="off" placeholder="Your Password" />

                                <lable>CONFIRM PASSWORD</lable>
                                <input className="signup_form_form_input" type="password"
                                    name="cpassword"
                                    value={user.cpassword} onChange={handleInputs}
                                    autocomplete="off" placeholder="Confirm your Password" />

                                <div className="terms">
                                    <input type="checkbox" />
                                    <span> I agree all statments in </span>
                                    <a href="#" className="lined-link">terms of service</a>
                                </div>
                                <input type="submit"
                                    className="form-btn"
                                    value="Sign Up"
                                    onClick={postData} />
                                {/* <br></br> */}
                                <a href="/signin" className="lined-link to-signin-link">I'm already member</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
