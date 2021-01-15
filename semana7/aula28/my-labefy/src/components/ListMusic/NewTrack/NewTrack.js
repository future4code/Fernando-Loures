import React from 'react';

export default class NewTrack extends React.Component {
    state = {
        inputNameValue:'',
        inputArtistValue:'',
        inputUrlValue: ''
    }
    handleName = (e) =>{
        this.setState({inputNameValue: e.target.value})
    }
    handleName = (e) =>{
        this.setState({inputArtistValue: e.target.value})
    }
    handleName = (e) =>{
        this.setState({inputUrlValue: e.target.value})
    }

    render() {
        return (
            <div >
                <h3>Criar Playlist</h3>
                <input onChange={this.handleName} value={this.state.inputNameValue} placeholder="Música" />
                <input onChange={this.handleArtist} value={this.state.inputArtistValue} placeholder="Artista ou Banda" />
                <input onChange={this.handleUrl} value={this.state.inputUrlValue} placeholder="url da música" />
                <button onClick={this.createTrack}>Criar playlist</button>

            </div>
        );
    }
}