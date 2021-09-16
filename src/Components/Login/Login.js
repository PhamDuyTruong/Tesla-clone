import React, {useState} from 'react';
import "./Login.css"
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
 import {Link, useHistory} from 'react-router-dom';
 import { auth } from '../../firebase';
 import { login } from '../../features/user/userSlice';
 import {useDispatch} from 'react-redux';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const history = useHistory()

    const signIn = (e) =>{
       e.preventDefault();

       auth.signInWithEmailAndPassword(email, password).then((userAuth) =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
            history.push('/teslaaccount')
       }).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__header">
                <div className="login__logo">
                    <Link to="/">
                       <img src="/images/logo.svg" alt="Logo Image"/>
                    </Link>
                </div>
                <div className="login__language">
                     <LanguageOutlinedIcon /> <span>en-US</span>
                </div>
            </div>
            <div className="login__info">
                    <h1>Sign In</h1>
                    <form className="login__form">
                        <label htmlFor='email'>Email Address</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor='password'>Password</label>
                        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <ButtonPrimary name='Sign In' type='submit' onClick={signIn} />
                    </form>
                    <div className='login__divider'>
                      <hr /> <span>OR</span> <hr />
                    </div>
                    <Link to='/signup'>
                         <ButtonSecondary name='create account' />
                    </Link>
            </div>
        </div>
    )
}
