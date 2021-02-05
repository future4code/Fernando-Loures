import styled from 'styled-components'

export const HeaderContainer = styled.div`
background-color:#1a237e;
color:white;
 display:flex;
 justify-content: space-between;
 align-items:center;
 border-bottom: 1px solid blue;
 overflow: hidden;
 @media screen and (max-width: 600px) {
    /* padding-bottom: 220px; */
    min-width:300px;
    }
`
export const Nav = styled.nav`
    display: flex;
    padding-right:20px;
    @media screen and (max-width: 600px) {
        position: absolute;
        top: 50px;
        flex-direction:column;
    }  
`

export const Links = styled.div`
    cursor:pointer;
    padding: 5px 10px;
    :hover{
        background-color:#534bae;
    }
    @media screen and (max-width: 600px) {
      float: none;
      display: block;
      text-align: left;
    }
`
export const Logo = styled.p`
    cursor:pointer;
    padding: 10px 20px;
    @media screen and (max-width: 600px) {
        position: absolute;
        top:-1px;
        padding: 5px 10px;
    }
`