import React, { useState } from 'react'
import { CContainer, CRow, CCol, CFormGroup, CLabel, CInput, CForm, CFormText, CButton } from '@coreui/react' 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Dashboard = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (event) => {
        console.log('email value', event.target.value)
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        console.log('pword value', event.target.value)
        setPassword(event.target.value)
    }

    const signIn = () => {
        console.log("createAccount fn")
        console.log('email, password: ', email, password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("success, user", user)
            console.log(userCredential)
            const idToken = userCredential.idToken
            console.log(idToken)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("fail, errorcode ", errorCode, " errormsg ", errorMessage)
            // ..
        });
    }

    const createAccount = () => {
        console.log("createAccount fn")
        console.log('email, password: ', email, password)
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("success, user", user)
            console.log(userCredential)
            const idToken = userCredential.idToken
            console.log(idToken)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("fail, errorcode ", errorCode, " errormsg ", errorMessage)
            // ..
        });
    }

    const verifyUser = () => {
        const auth = getAuth();
        auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            // Send token to your backend via HTTPS
            // ...
            const Http = new XMLHttpRequest();
            const url='localhost:8000/verifyIdToken';
            Http.open("POST", url);
            Http.send({
                "IdToken": idToken,
                "TestMessage": "my message.."
            });

            Http.onreadystatechange = (e) => {
                console.log('http change..')
                console.log('e:', e)
                console.log(Http.responseText)
            }
          }).catch(function(error) {
            // Handle error
            console.log('error', error)
          });
    }

  return (
    <>
        <CContainer>
            <CRow>
                <CCol sm="12">
                    <CForm action="" method="post">
                        <CFormGroup>
                            <CLabel htmlFor="nf-email">Email</CLabel>
                            <CInput
                                type="email"
                                id="nf-email"
                                name="nf-email"
                                placeholder="Enter Email.."
                                autoComplete="email"
                                value={email}
                                onChange={onEmailChange}
                            />
                            <CFormText className="help-block">Please enter your email</CFormText>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="nf-password">Password</CLabel>
                            <CInput
                                type="password"
                                id="nf-password"
                                name="nf-password"
                                placeholder="Enter Password.."
                                autoComplete="current-password"
                                value={password}
                                onChange={onPasswordChange}
                            />
                            <CFormText className="help-block">Please enter your password</CFormText>
                        </CFormGroup>
                        <CButton variant="outline" color="primary" onClick={createAccount}>Create Account</CButton>
                        <CButton variant="outline" color="primary" onClick={signIn}>Sign In</CButton>
                        <CButton variant="outline" color="primary" onClick={verifyUser}>Verify User</CButton>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    </>
  )
}

export default Dashboard
