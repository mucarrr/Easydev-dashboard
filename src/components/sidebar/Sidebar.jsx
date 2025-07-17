import React from 'react'
import { Sidebar, MenuContainer, MenuTop, MenuItems, MenuBottom } from './Sidebar.styles'
import { CiLogin } from "react-icons/ci";
import { LiaBuffer } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiSketchLogoThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const SidebarComponent = ({ isCollapsed }) => {
    const navigate = useNavigate();

  const handleMenuClick = (menuType) => {
    switch(menuType) {
      case 'login':
        navigate('/');
        break;
      case 'layout':
        console.log('Layout menüsüne tıklandı');
        break;
      case 'example-pages':
        console.log('Example Pages menüsüne tıklandı');
        break;
      default:
        console.log(`${menuType} menüsüne tıklandı`);
    }
  };

  return (
    <Sidebar isCollapsed={isCollapsed}>
                <MenuContainer>
                    <MenuTop>
                        <MenuItems isCollapsed={isCollapsed}>
                            <div 
                                onClick={() => handleMenuClick('login')}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 15px', marginLeft: '2px' }}
                            >
                                <CiLogin size={16} color="var(--icons-color)" />
                                <span>Log In</span>
                            </div>
                        </MenuItems>
                        <MenuItems isCollapsed={isCollapsed}>
                            <div 
                                onClick={() => handleMenuClick('layout')}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 15px', marginLeft: '2px' }}
                            >
                                <LiaBuffer size={16} color="var(--icons-color)" />
                                <span>Layout</span>
                            </div>
                            {!isCollapsed && <MdKeyboardArrowRight size={20} color="var(--icons-color)" />}

                        </MenuItems>
                    </MenuTop>
                    <MenuBottom>
                    <MenuItems isCollapsed={isCollapsed}>
                        <div 
                            onClick={() => handleMenuClick('example-pages')}
                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 15px', marginLeft: '2px' }}
                        >
                            <PiSketchLogoThin size={16} color="var(--icons-color)" />
                            <span>Example Pages</span>
                        </div>
                        {!isCollapsed && <MdKeyboardArrowRight size={20} color="var(--icons-color)" />}
                    </MenuItems>
                    </MenuBottom>
                </MenuContainer>
            </Sidebar>
  )
}

export default SidebarComponent