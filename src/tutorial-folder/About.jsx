import React from 'react';
import logo from './assets/logo.png'
import Background from './assets/lock.jpg'

function About() {

    return (
        <div className="login-page-box">
            <img src={logo} className="logo" />
            <h1>Login</h1>
            <form>
                <p>Email</p>
                <input type="text" name="email" placeholder="Email"></input>
                <p>Password</p>
                <input type="password" name="password" placeholder="Password"></input>
                <input type="submit" class=" btn btn-sm" value="Login"></input>
                <a href="#" className="float-left">Forgot possword</a>
                <br></br>
                <a href="#" className="float-right">Register</a>
            </form>
        </div>
    );
}

export default About;
