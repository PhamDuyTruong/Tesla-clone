import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice'
import Account from './Components/Account/Account';
import Menu from './Components/Menu/Menu';
import { auth } from './firebase'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        //Signed out
        dispatch(logout())
      }
    })
  }, [dispatch])


  return (
    <BrowserRouter>
      <Switch>
     
        <Route exact path="/">
            <Header />
            <Home />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to='/teslaaccount' /> : <Login />}
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/teslaaccount">
        {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <Account
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
        </Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
