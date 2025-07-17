import React, { useState } from 'react'
import { Header, HamburgerMenu, ProfileNameContainer, ProfileImage, ProfileNameText, ProfileOptions } from './Header.styles'
import { LuMenu } from "react-icons/lu";
import { LogoutIcon } from '../LoginPageIcons/Icons';

const HeaderComponent = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
    const handleHamburgerClick = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <Header>
            <HamburgerMenu onClick={handleHamburgerClick}>
                <LuMenu size={24} color="var(--icons-color)" />
            </HamburgerMenu>
            <ProfileNameContainer>
                <ProfileImage>
                    <img src="/ava.png" alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                </ProfileImage>
                <ProfileNameText>
                    <span>Roman Johanson</span>
                </ProfileNameText>
                <ProfileOptions>
                    <LogoutIcon />
                </ProfileOptions>
            </ProfileNameContainer>
        </Header>
    )
}

export default HeaderComponent