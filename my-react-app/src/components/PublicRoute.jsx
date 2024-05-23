import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useAtom } from 'jotai';
import { countAtom } from './atoms';

const PublicRoute = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
