import styled from 'styled-components';

export const ListProfile = styled.li`
    list-style:none;
    height: 50px;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

export const ListImg = styled.img`
    height:50px;
    width:50px;
    border-radius: 40%;

`
export const Container = styled.div`
    height: 70vh;
    overflow-y: auto;
    /* border:solid 1px red; */
`;
   

export const ListContainer = styled.ul`
border-bottom: solid 1px lightgray;
padding: 5px;
margin: 0px;
`
export const TextMessage = styled.h4`
text-align:center;
color: orange;
margin-top: 20vh;
`