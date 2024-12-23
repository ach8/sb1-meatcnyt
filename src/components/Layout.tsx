import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './footer/FooterSection';
import CursorEffect from './CursorEffect';
import BackgroundSystem from './effects/BackgroundSystem';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-100 relative">
      <BackgroundSystem variant="default" intensity="medium" />
      <CursorEffect />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;