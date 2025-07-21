import styled from "styled-components";

export const MainContainer = styled.div`
    padding-left: ${({ isSidebarCollapsed }) => isSidebarCollapsed ? '60px' : '240px'};
    padding-top: 75px;
    width: 100%;
    height: 100vh;
    transition: padding-left 0.3s;
`;
export const Content = styled.div`
    width: 100%;
    max-width: 1630px;
    margin: 0 auto;
`;
export const Row = styled.div`
    display: flex;
    display: wrap;
`;
export const Col = styled.div`
    width: 100%; 
    padding: 0 15px;   
`;
export const Heading = styled.h3`
    margin-bottom: 30px;
    text-align: left;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 20px;
    color: var(--text-color);
`;
export const Container = styled.div`
    background-color: #fff;
    padding: 5px 20px;
`;
export const TitleContainer = styled.h4`    
    margin-bottom: 30px;
    text-transform: uppercase;
    text-align: left;
    & p{
        text-transform: none;
        font-size: 12px;
        line-height: 18px;
        opacity: 0.7;
        color: var(--text-color);
        margin-top: 0;
        font-weight: 400;
    }
`;
export const Title = styled.h5`
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    text-align: left;
    color: var(--text-color);
    margin-bottom: 3px;
`;
export const ContentContainer = styled.p`
    font-weight: 400;
    color: var(--text-color);
    margin-bottom: 15px;
`;
