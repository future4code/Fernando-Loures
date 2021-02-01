import React from 'react';
import { urlBase } from '../../parameters';
import { parameterHeader } from '../../parameters';
import axios from 'axios';
import styled from 'styled-components';
import {BtnApp, AppDiv,P, SubTitle, InputValues, CreateApp} from '../../styled';

export default class Create extends React.Component {
    state = {
        inputCreateValue: "",
        status: ""
    }
    createPlaylist = () => {
        const body = {
            "name": this.state.inputCreateValue
        }
        axios.post(urlBase, body,parameterHeader)
            .then(response => {
                console.log(response)
                this.setState({status: `A playlist ${this.state.inputCreateValue} foi criada.`,
                            inputCreateValue:""})
            })
            .catch(err => {
                console.log(err)
                this.setState({status: `Já existe uma playlist com o nome: ${this.state.inputCreateValue}.`,
                inputCreateValue:""})
            })
    }
    handleCreate = (e) => {
        this.setState({ inputCreateValue: e.target.value })
    }

    render() {
        const message = (<P>{this.state.status}</P>)
        return (
            <CreateApp>
                <SubTitle>Criar Playlist</SubTitle>
                <InputValues onChange={this.handleCreate} value={this.state.inputCreateValue} placeholder="insira o nome da Playlist" />
                <BtnApp onClick={this.createPlaylist}>Criar playlist</BtnApp>
                {message}
            </CreateApp>
        );
    }
}

// O usuário deve ser capaz de criar uma playlist de músicas.
// Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.:      
