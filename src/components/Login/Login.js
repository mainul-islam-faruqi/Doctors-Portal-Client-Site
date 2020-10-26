import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from 'react-router-dom';
import loginBg from '../../images/loginBg.png'

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
            console.log(loggedInUser)
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                console.log(error)
            });
    }

    useEffect(()=>{
        loggedInUser.email && fetch('http://localhost:5000/addPatient', {
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({loggedInUser})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },[loggedInUser.email])


    return (
        <div className="login-page container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput">Example label</label>
                        <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput">Example label</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput">Example label</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                    </div>

                    <div className="from-group mt-5">
                        <button className="btn button-primary" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>

                <div className="col-md-6">
                    <img className="img-fluid" src={loginBg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Login;