import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import axios from "axios";

//Testing
import { fetchTweets, fetchUserTweets, postTweet } from './actions/tweet_actions';

document.addEventListener("DOMContentLoaded", () => {

  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { session: { isAuthenticated: true, user: decodedUser} };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Root store={ store }/>
    </React.StrictMode>
  );
  

  //Testing
  window.axios = axios;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchTweets = fetchTweets;
  window.fetchUserTweets = fetchUserTweets;
  window.postTweet = postTweet;
})



