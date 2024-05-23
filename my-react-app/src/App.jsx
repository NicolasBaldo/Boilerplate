import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeToggler from './components/ThemeToggler';
import PrivatePage from './Pages/PrivatePage';

const App = () => {
  return (
    <div>
      <ThemeToggler />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<PublicRoute />} />
        <Route path="/private" element={<PrivateRoute />}>
          <Route path="" element={<PrivatePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
