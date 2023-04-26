import styled from "styled-components";

export const ContainerHead = styled.div`
    padding: 10px;
    border-radius: 4px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonLink = styled.div`
    width:20vw;
    height: 100%;    
    display:flex;
    align-items:center;
    justify-content:center;

    :hover{
        background-color: #F5F9FF;
        cursor: pointer;
    }

`;
export const Button = styled.button`
    padding: 10px;
    height: 40px;
    width: 30px;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: green;

    :hover{
        cursor: pointer;
    }

`;
