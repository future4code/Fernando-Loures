import styled from 'styled-components'
import GroupIcon from '@material-ui/icons/Group';
import ClearAllIcon from '@material-ui/icons/ClearAll';


export const HeaderContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-content:center;
    height: 50px;
    padding: 5px 10px;
      /* border: solid 1px red; */
`;
export const IconGroup = styled(GroupIcon)`
    cursor:pointer;
    color: orange;
    :hover{
        color: darkorange;
    }

`;
export const Clear = styled(ClearAllIcon)`   
    cursor:pointer;
    color: orange;
    :hover{
        color: red;
    }`
;
export const H1 =styled.h2`
    padding: 0;
    margin: 0;
    color:orange;
`
export const H1Color =styled.span`
    color:black;
`