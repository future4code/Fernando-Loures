import React from 'react';
import axios from 'axios';
import { urlBase } from '../../shortcut';
import { parameters } from '../../shortcut';


export default class UserDetails extends React.Component {
    state = {
        detail: ['id', 'name', 'email']
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
                    <button onClick={this.props.UserDetails}>voltar</button></td>
                </tr>
            </table>
        )

        return (
            <div>
                <h2>Detalhes do usuário</h2>
                {renderDetail}
            </div>
        )
    }
}