import styled from 'styled-components'


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width:100%;
`

export const Container = styled.div`
    width:90vw;
    max-width:500px;
    height: 60vh;
    max-height:600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* background-color: lightgray; */}
    margin: auto;
    margin-top:10vh;
    border-radius:10px;

`

export const BtnContainer = styled.div`
    margin-top: 5px;
    width:100%;
`