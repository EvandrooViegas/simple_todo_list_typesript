import styled from "styled-components"
export const Container = styled.div`
    border: 1px solid #555; 
    border-radius: 7px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image {
       margin-right: 5px;
       color: black;
       justify-content: center;
       justify-items: center;
       padding: 5px 10px;
       border-radius: 3px;
       align-items: center;
       background-color: #305dff;
       color: white;
       cursor: pointer;
    }

    .input {
        border: 0px;
        background-color: transparent;
        outline: none;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }
`