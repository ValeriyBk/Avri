import React from 'react';
import Header from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header logoUrl="/logo.png" onSearch={(query) => console.log(query)} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
