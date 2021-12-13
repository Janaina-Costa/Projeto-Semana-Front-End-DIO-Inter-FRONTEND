import styled from "styled-components";

 export const ButtonContainer = styled.button`
    width: 100%;
    height: 47px;

    color: ${({theme})=> theme.colors.background};
    background: ${({theme})=> theme.colors.primary};
    border: 1px solid ${({theme})=>theme.colors.primary};
    border-radius: 10px;

    margin-bottom: 20px;

    font-weight: 403;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 5000;

    &:hover{
        filter: opacity(0.8);
    }
    &:disabled{
        filter: opacity(0.4);
    }
 `