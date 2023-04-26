import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    padding: 20px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin: 20px 0;
`;
export const Form = styled.form`
    margin-top: 20px;
    width: 90%;
    height: 100%;
`;
export const BoxText = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    margin:0;
`;

export const Span = styled.span`
    color:#FF0000;
    margin:0;
    font-size: 0.9em;
    left:0;
    bottom:0;
    padding:0;  
`