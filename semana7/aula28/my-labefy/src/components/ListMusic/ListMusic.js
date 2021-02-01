import React from 'react';
import { urlBase } from '../../parameters';
import { parameterHeader } from '../../parameters';
import NewTrack from './NewTrack/NewTrack'
import axios from 'axios';
import styled from 'styled-components';
import { Table, SmallList, List, SubTitle, PlaylistName, Line, DeleteButton, SmallButton, Audio } from '../../styled';


export default class ListMusic extends React.Component {
    state = {
        playlists: [],
        details: [],
        showDetails: false,
        musicTracks: [],
        showNewTrackEdit: false,
        idNewTrack: '',
        idPlaylist:''
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get(urlBase, parameterHeader)
            .then(response => {
                console.log(response.data.result.list)
                this.setState({ playlists: response.data.result.list })
            }).catch(err => {
                console.log(err)
            })
    }

    deletePlaylist = (id) => {
        axios.delete(`${urlBase}/${id}`, parameterHeader)
            .then(response => {
                console.log(response)
                this.getAllPlaylists()
            })
            .catch(err => {
                console.log(err)
            })
        this.getAllPlaylists()
    }

    playlistDetails = (id) => {
        this.setState({idPlaylist:id})
        axios.get(`${urlBase}/${id}/tracks`, parameterHeader)
            .then(response => {
                console.log(response.data.result.tracks)
                this.setState({ musicTracks: response.data.result })
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({ showDetails: !this.state.showDetails })
    }


    addNewTracks = (id) => {
        this.setState({ showNewTrackEdit: !this.state.showNewTrackEdit })
        this.setState({ idNewTrack: id })
    }

    deleteTracks = (idTrack) =>{
        console.log("idtrack ",idTrack)
        axios.delete(`${urlBase}/${this.state.idPlaylist}/tracks/${idTrack}`,parameterHeader)
        .then((response) =>{
            console.log(response)
            this.playlistDetails(this.state.idPlaylist)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        let renderTracks = ''
        if (!(this.state.musicTracks.quantity === 0 || this.state.musicTracks.quantity === undefined)) {
            console.log(this.state.musicTracks.tracks)
            renderTracks = this.state.musicTracks.tracks.map(music => {
                return (
                    <Table>
                        <Line>
                            <th>{music.name}</th>
                            <th>{music.artist}</th>
                            <th>
                                <Audio controls>
                                    <source src={music.url} type="audio/ogg" />
                                    <source src={music.url} type="audio/mpeg" />
                                </Audio>
                            </th>
                            <th><SmallButton onClick={()=>this.deleteTracks(music.id)}>X</SmallButton></th>
                        </Line>
                    </Table>
                )
            })
        }


        const renderAllPlaylists = this.state.playlists.map(playlist => {
            return (
                <List>
                    <SmallList>
                        <PlaylistName>{playlist.name}</PlaylistName>
                        <DeleteButton onClick={() => this.deletePlaylist(playlist.id)}>Apagar</DeleteButton>
                        <SmallButton onClick={() => this.playlistDetails(playlist.id)}>Detalhes</SmallButton>
                        <SmallButton onClick={() => this.addNewTracks(playlist.id)}>Adicionar música</SmallButton>

                    </SmallList>
                    {(this.state.showNewTrackEdit && this.state.idNewTrack === playlist.id) && (
                        <NewTrack
                            playlistId={playlist.id} />
                    )}
                </List>
            )
        })


        return (
            <div className="App">
                <SubTitle>Minhas Playlists</SubTitle>
                {renderAllPlaylists}
                {(this.state.showDetails && renderTracks) && renderTracks}
            </div>
        );
    }
}
