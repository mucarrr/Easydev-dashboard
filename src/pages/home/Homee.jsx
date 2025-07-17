import React, { useState } from 'react'
import HeaderComponent from '../../components/header/Header';
import SidebarComponent from '../../components/sidebar/Sidebar';

const Homee = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  return (
    <main>
        <div>
            <HeaderComponent 
              isSidebarCollapsed={isSidebarCollapsed}
              setIsSidebarCollapsed={setIsSidebarCollapsed}
            />   
            <SidebarComponent isCollapsed={isSidebarCollapsed}/>
        </div>
    </main>
  )
}

export default Homee