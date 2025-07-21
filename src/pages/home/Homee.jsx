import React, { useState } from 'react'
import HeaderComponent from '../../components/header/Header';
import SidebarComponent from '../../components/sidebar/Sidebar';
import PagesOne from '../pagesOne/pagesOne';

const Homee = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <HeaderComponent
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      <div style={{ display: 'flex', flex: 1 }}>
        <SidebarComponent isCollapsed={isSidebarCollapsed} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <PagesOne isSidebarCollapsed={isSidebarCollapsed} />
        </div>
      </div>
    </main>
  )
}

export default Homee