import React from 'react';
import axios from 'axios';
import { urlBase } from '../../shortcut';
import { parameters } from '../../shortcut';


export default class UserDetails extends React.Component {
    state = {
        detail: [],
        editPage: false,
        inputEditName: '',
        inputEditEmail: ''

    }
    componentDidMount() {
        this.getAllDetails()
    }

    getAllDetails = async () => {
        try {
            const response = await axios.get(`${urlBase}/${this.props.idDetails}`, parameters)
            console.log(response.data)
            this.setState({ detail: response.data })
        } catch (error) {
            console.log(error)
        }
    }


    deleteUser = async () => {
        if (window.confirm(`Tem certeza que quer apagar o usuário ${this.state.detail.name}?`)) {
            try {
                const response = await axios.delete(`${urlBase}/${this.state.detail.id}`, parameters)
                console.log(response)
                alert('O usuário foi deletado.')
                this.props.UserDetails()
            } catch (error) {
                console.log(error.message)
                alert('Não foi possível deletar o usuário.')
            }
        }
    }
    changeToEdit = () => {
        this.setState({ editPage: !this.state.editPage })
        console.log('true ou false',this.state.editPage)
    }

    editName = (e) => {
        this.setState({ inputEditName: e.target.value })
    }

    editEmail = (e) => {
        this.setState({ inputEditEmail: e.target.value })
    }

    saveEdition = async () => {
        const body = {
            name: this.state.inputEditName,
            email: this.state.inputEditEmail
        }
        try {
            const response = await axios.put(`${urlBase}/${this.state.detail.id}`, body, parameters)
            console.log(response.data)
            this.changeToEdit()
            alert('Usuário editado com sucesso!')
        } catch (error) {
            console.log(error.resposnse)
            alert('Não foi possível criar o usuário.')
        }

        this.setState({ inputValueEmail: "", inputValueNome: "" })
    }

    render() {
        const renderDetail = (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Opções</th>
                </tr>
                <tr>
                    <td>{this.state.detail.id}</td>
                    <td>{this.state.detail.name}</td>
                    <td>{this.state.detail.email}</td>
                    <td><button onClick={this.deleteUser}>Apagar</button>
                        <button onClick={this.changeToEdit}>Editar</button></td>
                </tr>
            </table>
        )

        const editSection = (
            <div>
                <h3>Editar usuário:</h3>
                <label>Nome:</label>
                <input onChange={this.editName} value={this.state.inputEditName} />
                <label>E-mail:</label>
                <input onChange={this.editEmail} value={this.state.inputEditEmail} />
                <button onClick={this.saveEdition}>Salvar edição</button>
            </div>
        )

        return (
            <div>
                <h2>Detalhes do usuário</h2>
                {renderDetail}
                {this.state.editPage ? editSection : <div></div>}
                <button onClick={this.props.UserDetails}>voltar</button>
            </div>
        )
    }
}