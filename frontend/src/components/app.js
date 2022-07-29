import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Routes,Route } from 'react-router-dom';
import MainPage from './main/main_page';
import NavbarContainer from './nav/navbar_container';

const App = () => (
    <div className='page-container'>
        
        <NavbarContainer />

        <Routes>
            <Route path="/" element={<MainPage />} />

        </Routes>

        <footer>
            Copyright &copy; 2022 Chirper
        </footer>

    </div>
);

export default App;