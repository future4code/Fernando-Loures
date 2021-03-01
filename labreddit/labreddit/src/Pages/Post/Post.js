import React from 'react'
import { useParams } from 'react-router'
import useProtectedPage from '../../Hooks/useProtectedPage'
import useRequestData from '../../Services/useRequestData'
import {URL_BASE} from '../../Constants/url'
import NewComment from '../../Components/NewComment/NewComment'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import {newVote} from '../../Services/useVote'
import { useHistory } from 'react-router'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core'


const StyledCard = styled(Card)`
    width: 80vw;
    background-color: #E8F5E9;
    margin: 5px;
    
`
const ContainerDetails = styled.div`
    margin:5vh;
    display:flex;
    flex-directioN:column;
    align-items:center;
    
`

export default function Post(){
    useProtectedPage()
    const {id} = useParams()
    const details = useRequestData({}, `${URL_BASE}/posts/${id}`)
    const history = useHistory()

    const newVotePositive = (commentId) =>{
        newVote(`${URL_BASE}/posts/${id}/comment/${commentId}/vote`, {direction: 1}, history)
    }
    const newVoteNegative = (commentId) =>{
        newVote(`${URL_BASE}/posts/${id}/comment/${commentId}/vote`, {direction: -1}, history)
    }

    return(
        <ContainerDetails>
        <StyledCard>
        {!details.post && (
                <StyledCard>
                    Loading ...<CircularProgress />    
                </StyledCard>
                )}
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Nome: {details.post && details.post.username}   
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Post: {details.post && details.post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Texto: {details.post && details.post.text}   
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Votos: {details.post && details.post.votesCount}                    
                    </Typography>
                    
                </CardContent>
            </CardActionArea>
        </StyledCard>
            <h3> comentários:</h3>
            {!details.post && (
                <StyledCard>
                    Loading ...<CircularProgress />    
                </StyledCard>
                )}
           {details.post && details.post.comments.map((comment)=>{
              return(
                  <StyledCard key={comment.id}> 
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Nome: {comment.username}   
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {comment.text}  
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Votos: {comment.votesCount}   
                        </Typography>
                    </CardContent>
                    <CardActions>
                                              
                        <Button margin={"dense"} fullWidth variant="contained" color="primary" onClick={()=>newVotePositive(comment.id)}> vote + </Button>
                        <Button margin={"dense"} fullWidth variant="contained" color="primary" onClick={()=>newVoteNegative(comment.id)}> vote - </Button>
                    </CardActions> 
                </StyledCard>
                )
           })}
           <NewComment
               id={id}
           />
        </ContainerDetails>
    )
}
