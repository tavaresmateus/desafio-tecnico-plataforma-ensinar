import styled from "styled-components";
import '@fontsource/roboto/300.css'; 

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
`;
export const ItemColumn = styled.div`
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-family: roboto;
`;
export const Item = styled.div`
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    
`;
export const ButtonDelete = styled.button`
    height: 100%;
    padding: 5px;
    display: flex;
    margin-left: 5px;
    background-color: unset;
    border: none;
    color:grey;
    :hover{
        cursor:pointer;
        color: red;
    }
    
`;
export const ButtonEdit = styled.button`
    height: 100%;
    padding: 5px;
    display: flex;
    margin-left: 5px;
    background-color: unset;
    border: none;
    color:grey;
    :hover{
        cursor:pointer;
        color:green;
    }
    
`;
export const SubContainer = styled.div`

    :hover{
        cursor: default;
        background-color:#D4F5CE;
    }
    
`;


    
