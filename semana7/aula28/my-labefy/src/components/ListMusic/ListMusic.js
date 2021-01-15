import React from 'react';
import { urlBase } from '../../parameters';
import { parameterHeader } from '../../parameters';
import NewTrack from './NewTrack/NewTrack'
import axios from 'axios';


export default class ListMusic extends React.Component {
    state = {
        playlists: [],
        details: [],
        musicTracks: [],
        showNewTrackEdit: false,
        idNewTrack:''
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
    }

    playlistDetails = (id) => {
        axios.get(`${urlBase}/${id}/tracks`, parameterHeader)
            .then(response => {
                console.log(response.data.result)
                this.setState({ musicTracks: response.data.result })
            })
            .catch(err => {
                console.log(err)
            })
    }


    addNewTracks = (id) => {
        this.setState({ showNewTrackEdit: !this.state.showNewTrackEdit })
        this.setState({ idNewTrack: id })
    }

    render() {
        let renderTracks = ''
        if (!(this.state.musicTracks.quantity === 0 || this.state.musicTracks.quantity === undefined)) {
            console.log(this.state.musicTracks.tracks)
            renderTracks = this.state.musicTracks.tracks.map(music => {
                return (
                    <div>
                        <p>Música: {music.name}</p>
                        <p>Artista: {music.artist}</p>
                        <p>Música: {music.url}</p>
                    </div>
                )
            })
        }


        const renderAllPlaylists = this.state.playlists.map(playlist => {
            return (
                <div>
                    <span>{playlist.name}</span>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>Apagar playlist</button>
                    <button onClick={() => this.playlistDetails(playlist.id)}>Detalhes</button>
                    <button onClick={()=>this.addNewTracks (playlist.id)}>Adicionar música</button>
                    {(this.state.showNewTrackEdit && this.state.idNewTrack === playlist.id)&&(
                        <NewTrack/>
                    )}
                </div>
            )
        })


        return (
            <div className="App">
                {renderAllPlaylists}
                {renderTracks && renderTracks}
            </div>
        );
    }
}

// O usuário deve ser capaz de criar uma playlist de músicas. 
// Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.