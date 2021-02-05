
import styled from 'styled-components'

export const Buttons = styled.button`
    padding: 10px 20px;
    border: #000051 solid 1px;
    border-radius: 5px;
    color: white;
    background-color: #1a237e;
    margin: 5px;
    max-width:80vw;
    cursor:pointer;
    :hover{
        background-color: #534bae;
    }
`;

export const Inputs = styled.input`
    padding: 5px 10px;
    width: 300px;
    border: solid 1px #1a237e;
    border-radius: 5px;
    background-color:#ffffff;
    margin: 5px;
    max-width:80vw;
`

export const Selects = styled.select`
    padding: 5px 10px;
    width: 320px;
    border: solid 1px #1a237e;
    border-radius: 5px;
    background-color:#ffffff;
    margin: 5px;
    max-width:80vw;
`
export const Success = styled.p`
    color:green;
`;

export const Failed = styled.p`
    color:red;
`;