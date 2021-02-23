import styled from 'styled-components'

export const ContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
`

export const Div = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    border: solid black 1px;
    border-radius: 20px;
    margin: 0 5vw 5vh 5vw;

`

export const Trip =  styled.div`
    padding: 10px;
    width: 300px;
    margin: 20px;
`
export const Trip1 =  styled.div`
    padding: 10px;
    width: 90vw;
    margin: 20px;
    /* border: solid 1px red; */
    display:flex;
    flex-direction: column;
    align-items:center;
`
export const List = styled.li`
    list-style:none;
    text-align: left;
    border: solid 1px black;
    padding: 5px;
`
export const Ul = styled.ul`
    padding:0px;
    text-align: left;
    margin: 5px;
`
export const H = styled.h1`
    text-align:center;
`
export const Approve = styled.button`
    background-color:lightgreen;
    padding:5px 10px;
    border-radius: 5px;
    border: none;
    margin: 2px;
    :hover{
        background-color:green;
    }
`

export const Repprove = styled.button`
    background-color:red;
    padding:5px 10px;
    border-radius: 5px;
    border: none;
    margin:2px;
    :hover{
        background-color: darkred;
    }
`