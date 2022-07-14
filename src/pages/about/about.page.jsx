import React from 'react';
import { Outlet } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div>
      <h2>AboutPage</h2>
      <Outlet />
    </div>
  )
}
