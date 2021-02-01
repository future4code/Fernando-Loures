import styled from 'styled-components';

export const BtnApp = styled.button`
    padding: 10px 20px;
    margin:10px;
    background-color: greenyellow;
    color: white;
    font-weight: bold;
    border-radius:5%;
    border: blue 1px solid;
    cursor: pointer;
`;
export const Footer = styled.footer`
color:greenyellow;
text-align:center;
`;
export const AppDiv = styled.div`
background-color:darkblue;
width:100vw;
height:100vh;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 2fr 20fr 1fr;
`;
export const AppDiv2 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
align-items:center;
`;

export const Title = styled.h1`
color: greenyellow;
border-bottom: 2px solid greenyellow;
padding:20px;
`; 

export const SubTitle = styled.h2`
    color: greenyellow;
    border-bottom: 2px solid greenyellow;
    padding:10px;
    margin-bottom:20px;
    text-align:center;
`;
export const InputValues = styled.input`
padding:10px;
border:none;
border-bottom: greenyellow 5px solid;
background-color: darkblue;
color: white;
border-radius:10%;
`;
export const SmallInputValues = styled.input`
padding:5px;
margin: 5px;
border: none;
border-bottom: greenyellow 1px solid;
background-color: darkblue;
color: white;
`;

export const CreateApp = styled.div`
margin: 50px;
display: flex;
flex-direction:column;
align-items:center;
`; 

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    `; 
export const DeleteButton = styled.button`
    padding: 5px 10px;
    margin:5px;
    background-color: greenyellow;
    color: red;
    font-weight: bold;
    border-radius:5%;
    border: blue 1px solid;
    cursor:pointer;
`;

export const SmallButton = styled.button`
    padding: 5px 10px;
    margin:5px;
    background-color: greenyellow;
    color: White;
    font-weight: bold;
    border-radius:5%;
    border: blue 1px solid;
    cursor: pointer;
`;
export const PlaylistName = styled.span`
    padding: 5px 10px;
    margin:5px;
    color: White;
    font-weight: bold;
    border-radius:5%;
    font-size:1.5rem;
`;
export const List = styled.div`
    padding: 20px;
    margin:5px;
    color: White;
    font-weight: bold;
    border-radius:5%;
    border-bottom: solid greenyellow 1px;
`;
export const SmallList = styled.div`
  display:flex;
  justify-content:space-between;
`;

export const NewMusic = styled.h4`
    color: greenyellow;
    padding:5px;
    margin-bottom:5px;
    text-align:center;
`;
export const Table = styled.table`
    color: greenyellow;
    width:50vw;
    /* border: 1px solid orange; */
`;
export const Line = styled.tr`
    display:flex;
    justify-content: space-between;
    align-items:center;
`;
export const Audio = styled.audio`
    color:orange;
`;
export const P = styled.p`
    color:orange;
`;

