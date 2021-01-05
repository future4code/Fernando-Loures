import React, { Component } from 'react'
import './Compartilhar.css'
import face from '../../img/facebook.png'
import insta from '../../img/instagram.jpg'
import twitter from '../../img/twitter.png'

export class SecaoCompartilhar extends Component {
    state = {
        textoCompartillhar: ""
    }

    onClickFace = () => {
        console.log("Post compartilhado no Facebook")
        this.setState({
            textoCompartillhar: this.textoCompartillhar = 'Post compartilhado no Facebook com a mensagem: Olha essa foto linda!'
        })
    }
    onClickInsta = () => {
        console.log("Post compartilhado no Instagram")
        this.setState({
            textoCompartillhar: this.textoCompartillhar = 'Post compartilhado no Instagram com a mensagem: Olha essa foto linda!'
        })
    }
    onClickTwitter = () => {
        console.log("Post compartilhado no Twitter")
        this.setState({
            textoCompartillhar: this.textoCompartillhar = 'Post compartilhado no Twitter com a mensagem: Olha essa foto linda!'
        })
    }

    render() {
        let mensagem = this.textoCompartillhar
        console.log(mensagem)
        return (
            <div className={'compartilhar-container'}>
                <div className={'compartilhar'}>
                    <img alt={'Facebook'} src={face} onClick={this.onClickFace}></img>
                    <img alt={'Instagram'} src={insta} onClick={this.onClickInsta}></img>
                    <img alt={'twitter'} src={twitter} onClick={this.onClickTwitter}></img>
                </div>
                <div>
                    <p>
                        {mensagem}
                    </p>
                </div>

            </div>)
    }
}
