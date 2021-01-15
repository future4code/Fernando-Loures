import React from 'react';
import { urlBase } from '../../parameters';
import { parameterHeader } from '../../parameters';
import axios from 'axios';

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
        const message = (<p>{this.state.status}</p>)
        return (
            <div className="App">
                <h3>Criar Playlist</h3>
                <input onChange={this.handleCreate} value={this.state.inputCreateValue} placeholder="insira o nome da Playlist" />
                <button onClick={this.createPlaylist}>Criar playlist</button>
                {message}
            </div>
        );
    }
}

// O usuário deve ser capaz de criar uma playlist de músicas.
// Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.:      
