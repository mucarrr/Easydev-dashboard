import styled from "styled-components";

export const Sidebar = styled.div`
   position: fixed;
   top: 60px;
   bottom: 0;
   left: 0;
   width: ${props => props.isCollapsed ? '55px' : '240px'};
   min-width: ${props => props.isCollapsed ? '55px' : '240px'};
   max-width: ${props => props.isCollapsed ? '55px' : '240px'};
   height: 100vh;
   background-color: #fff;
   box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
   transition: width 0.3s, min-width 0.3s, max-width 0.3s;
`;
export const MenuContainer = styled.div`
   padding: 15px 0;
   width: 100%;
`;
export const MenuTop = styled.div`
   padding: 15px 0;
   border-bottom: 1px solid #eff1f5;
`;
export const MenuBottom = styled.div`
   padding: 15px 0px;
`;
export const MenuItems = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-right: 14px;
   cursor: pointer;
   &:hover{
    background-color: #f8f9fa;
   }
   span{
   color: var(--text-color);
   font-size: 14px;
   font-weight: 400;
   line-height: 18px;
   display: ${props => props.isCollapsed ? 'none' : 'block'};
   }
`;
export const MenuItemsShow = styled.div` 
    background-color: #f8f9fa;
    padding: 9px 15px;
    &:hover{
    background-color: #ffffff;
    cursor: pointer;
    }
span{
    color: var(--text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-left: 28px;
   
}
`;
