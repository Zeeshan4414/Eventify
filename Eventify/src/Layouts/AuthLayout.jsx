import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
