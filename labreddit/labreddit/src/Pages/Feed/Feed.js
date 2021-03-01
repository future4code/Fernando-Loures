import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useProtectedPage from '../../Hooks/useProtectedPage'
import {URL_BASE} from '../../Constants/url'
import useRequestData from '../../Services/useRequestData'
import NewPost from '../../Components/NewPost/NewPost'
import {goToPost} from '../../Router/Coordinator'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import {newVote} from '../../Services/useVote'
import { CircularProgress } from '@material-ui/core';

const StyledCard = styled(Card)`
    width: 80vw
    background-color: #E8F5E9;
    margin: 5px;
   
`
const ContainerPosts = styled.div`
    display:flex;
    flex-directioN:column;
    align-items:center;
    cursor: auto;
    
`

export default function Feed(){
    useProtectedPage()
    const history = useHistory()

    const posts = useRequestData([], `${URL_BASE}/posts`)


    const onClickPost = (postId) =>{
        goToPost(history,postId)
    }
    const newVotePositive = (postId) =>{
        newVote(`${URL_BASE}/posts/${postId}/vote`, {direction: 1}, history)
    }
    const newVoteNegative = (postId) =>{
        newVote(`${URL_BASE}/posts/${postId}/vote`, {direction: -1}, history)
    }
    
    return(
        <ContainerPosts>
            <NewPost/>
            {!posts.posts && (
                <StyledCard>
                    Loading ...<CircularProgress />    
                </StyledCard>
                )}
            {posts.posts && posts.posts.map((post)=>{
                return (
                    <StyledCard key={post.id} >
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Nome: {post.username}   
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                Título: {post.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.votesCount} votos
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.commentsCount} Comentários
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                                              
                        <Button margin={"dense"} fullWidth variant="contained" color="primary" onClick={()=>newVotePositive(post.id)}> vote + </Button>
                        <Button margin={"dense"} fullWidth variant="contained" color="primary" onClick={()=>newVoteNegative(post.id)}> vote - </Button>
                        <Button margin={"dense"} fullWidth variant="contained" color="primary" onClick={()=>onClickPost(post.id)}>Ver detalhes</Button>
                    </CardActions>
                </StyledCard>  
            )})}
        </ContainerPosts>
    )
}

