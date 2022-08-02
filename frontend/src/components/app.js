import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Routes,Route, Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import NavbarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TweetsContainer from './tweets/tweets_container';

const App = () => (
    <div className='page-container'>
        
        <NavbarContainer />

        <Routes>
            
            <Route exact element={<AuthRoute />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginFormContainer />} />
                <Route path="/signup" element={<SignupFormContainer />} />
            </Route>
            
            <Route path="/tweets" element={<TweetsContainer />} />
            {/* <Route path="/profile" element={ProfileContainer} />
            <Route path="/new_tweet" element={TweetComposeContainer} /> */}


        </Routes>

        <footer>
            Copyright &copy; 2022 Chirper
        </footer>

    </div>
);

export default App;