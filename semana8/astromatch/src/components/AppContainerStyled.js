import styled from 'styled-components'

export const Container = styled.div`
    width: 90vw;
    height: 90vh;
    border:#ffa726 5px solid;
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    color: #000;    
    font-weight: bold;
    


        /* Extra small devices (phones, 600px and down) */
        @media only screen and (min-width: 600px) {
        width: 450px;
        height: 630px;
    }
  

`;