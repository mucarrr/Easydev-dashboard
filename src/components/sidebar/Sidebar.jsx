import React, { useState } from 'react'
import { Sidebar, MenuContainer, MenuTop, MenuItems, MenuBottom, MenuItemsShow } from './Sidebar.styles'
import { CiLogin } from "react-icons/ci";
import { LiaBuffer } from "react-icons/lia";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { PiSketchLogoThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const SidebarComponent = ({ isCollapsed }) => {
    const navigate = useNavigate();
    const [layoutOpen, setLayoutOpen] = useState(false);
    const [examplePagesOpen, setExamplePagesOpen] = useState(false);
    const [exampleSubpagesOpen, setExampleSubpagesOpen] = useState(false);

  const handleMenuClick = (menuType) => {
    switch(menuType) {
      case 'login':
        navigate('/log_in');
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
                                <CiLogin size={14} color="var(--icons-color)" />
                                <span>Log In</span>
                            </div>
                        </MenuItems>
                        <MenuItems isCollapsed={isCollapsed} onClick={() => setLayoutOpen((prev) => !prev)}>
                            <div 
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 15px', marginLeft: '2px' }}
                            >
                                <LiaBuffer size={14} color="var(--icons-color)" />
                                <span>Layout</span>
                            </div>
                            {layoutOpen ? <MdKeyboardArrowDown size={20} color="var(--icons-color)" /> : <MdKeyboardArrowRight size={20} color="var(--icons-color)" />}

                        </MenuItems>
                        {layoutOpen && (
                          <div style={{ padding: '15px 0', backgroundColor: '#f8f9fa' }}>
                            <MenuItemsShow>
                            <span>Light Theme</span>
                            </MenuItemsShow>
                            <MenuItemsShow>
                                <span>Dark Theme</span>
                            </MenuItemsShow>
                          </div>
                        )}
                    </MenuTop>
                    <MenuBottom>
                    <MenuItems isCollapsed={isCollapsed} onClick={() => setExamplePagesOpen((prev) => !prev)}>
                        <div 
                            onClick={() => handleMenuClick('example-pages')}
                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 15px', marginLeft: '2px' }}
                        >
                            <PiSketchLogoThin size={14} color="var(--icons-color)" />
                            <span>Example Pages</span>
                        </div>
                        {examplePagesOpen ? <MdKeyboardArrowDown size={20} color="var(--icons-color)" /> : <MdKeyboardArrowRight size={20} color="var(--icons-color)" />}
                    </MenuItems>
                    {examplePagesOpen && (
                          <div style={{ padding: '15px 0', backgroundColor: '#f8f9fa' }}>
                            <MenuItemsShow>
                            <span onClick={() => navigate('/pages/one')}>Page One</span>
                            </MenuItemsShow>
                            <MenuItemsShow onClick={() => navigate('/pages/two')}>
                                <span>Page Two</span>
                            </MenuItemsShow>
                            <MenuItemsShow onClick={() => setExampleSubpagesOpen((prev) => !prev)}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <span>Example Subpages</span>
                            {exampleSubpagesOpen ? <MdKeyboardArrowDown size={20} color="var(--icons-color)" /> : <MdKeyboardArrowRight size={20} color="var(--icons-color)" />}
                            </div>
                            </MenuItemsShow>
                            {exampleSubpagesOpen && (
                              <div style={{ padding: '15px 0', backgroundColor: '#f8f9fa' }}>
                                <MenuItemsShow>
                                <span>Subpage One</span>
                                </MenuItemsShow>
                                <MenuItemsShow>
                                <span>Subpage Two</span>
                                </MenuItemsShow>
                                </div>
                            )}
                          </div>
                        )}
                    </MenuBottom>
                </MenuContainer>
            </Sidebar>
  )
}

export default SidebarComponent