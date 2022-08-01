import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate, Outlet} from 'react-router-dom';


const Auth = ({ loggedIn }) => (
    !loggedIn ? (
        <Outlet /> 
    ) : (
        <Navigate to ="/tweets" />
    )
);


const Protected = ({ loggedIn }) => (
    loggedIn ? (
        <Outlet /> 
    ) : (
        <Navigate to ="/login" />
    )
);

const mapStateToProps = state => (
    {loggedIn: state.session.isAuthenticated}
);

export const AuthRoute = connect(mapStateToProps)(Auth);

export const ProtectedRoute = connect(mapStateToProps)(Protected);
