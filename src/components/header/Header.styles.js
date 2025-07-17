import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  z-index: 101;
`;
export const HamburgerMenu = styled.div`
   width: 60px;
   height: 60px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
`;
export const ProfileNameContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 15px;
   width: 180px;
   height: 100%;
   margin-right: 15px;
`;
export const ProfileImage = styled.div`
   width: 36px;
   height: 36px;
   border-radius: 50%;
`;
export const ProfileNameText = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 13px;
   line-height: 18px;
   margin-left: 10px;
   font-weight: 400;
   color: var(--text-color);
`;
export const ProfileOptions = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 8px;
   cursor: pointer;
   color: var(--icons-color);
`;