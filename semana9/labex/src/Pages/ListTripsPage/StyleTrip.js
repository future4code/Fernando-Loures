import styled from 'styled-components'

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 300px;
`
export const TripsContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
`
export const Trip =  styled.div`
    border: solid black 1px;
    border-radius: 20px;
    padding: 10px;
    width: 300px;
    margin: 20px;
    transition: all .2s ease-in-out;
    :hover, :active{
        transform: scale(1.1);
    }
`
export const List = styled.li`
    list-style:none;
`