import React from 'react';
import axios from 'axios';
import { urlBase } from '../../../parameters';
import { parameterHeader } from '../../../parameters';
import styled from 'styled-components';
import { SmallInputValues, NewMusic, List, SubTitle, PlaylistName, InputValues, DeleteButton, SmallButton } from '../../../styled';



export default class NewTrack extends React.Component {
    state = {
        inputNameValue: '',
        inputArtistValue: '',
        inputUrlValue: '',
        track: [],
        toggleMusic: false
    }
    handleName = (e) => {
        this.setState({ inputNameValue: e.target.value })
    }
    handleArtist = (e) => {
        this.setState({ inputArtistValue: e.target.value })
    }
    handleUrl = (e) => {
        this.setState({ inputUrlValue: e.target.value })
    }

    createTrack = (id) => {
        const body = {
            "name": this.state.inputNameValue,
            "artist": this.state.inputArtistValue,
            "url": this.state.inputUrlValue
        }
        axios.post(`${urlBase}/${id}/tracks`, body, parameterHeader,)
            .then((response) => {
                this.setState({
                    track: [this.state.inputNameValue, this.state.inputArtistValue, this.state.inputUrlValue],
                    inputNameValue: "",
                    inputArtistValue: "",
                    inputUrlValue: "",
                    toggleMusic: !this.state.toggleMusic
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const showResults = (
            <div>
                <p>Música adicionada a playlist!</p>
                <SmallButton onClick={() => this.setState({ toggleMusic: false })}>Voltar</SmallButton>
            </div>
        )
        return (
            <div >
                <NewMusic>Criar Playlist</NewMusic>
                <SmallInputValues onChange={this.handleName} value={this.state.inputNameValue} placeholder="Música" />
                <SmallInputValues onChange={this.handleArtist} value={this.state.inputArtistValue} placeholder="Artista ou Banda" />
                <SmallInputValues onChange={this.handleUrl} value={this.state.inputUrlValue} placeholder="url da música" />
                <SmallButton onClick={() => this.createTrack(this.props.playlistId)}>Criar playlist</SmallButton>
                {this.state.toggleMusic && showResults}
            </div>
        );
    }
}