import React from 'react'
import './Post.css'
import styled from 'styled-components'
import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../secaoCompartilhar/SecaoCompartilhar'

import iconeSalvoBranco from '../../img/save-white.png'
import iconeSalvoPreto from '../../img/save-black.svg'
import iconeCompartilhar from '../../img/compartilhar.png'

const PostContainer = styled.div` 
  /* border: 1px solid gray; */
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`  
height: 40px;
display: flex;
align-items: center;
padding-left: 10px;
`
const UserPhoto = styled.img`
height: 30px;
width: 30px;
margin-right: 10px;
border-radius: 50%;`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  img{
    max-width: 20px;
    /* max-height: 20px; */
  }
`
const PostPhoto = styled.img `
width: 100%;`
  












class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 10,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhar: false
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  onClickSalvo = () => {
    this.setState({
      salvo: !this.state.salvo
    })

  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if (!this.state.curtido) {
      this.state.numeroCurtidas += 1
    } else {
      this.state.numeroCurtidas -= 1
    }
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {

    let iconeSalvo
    if (this.state.salvo) {
      iconeSalvo = iconeSalvoPreto
    } else {
      iconeSalvo = iconeSalvoBranco
    }


    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteCompartilhar

    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar />
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return < PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvo}
          valorContador={""}
        />
        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
          valorContador={""}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </ PostContainer>
  }
}

export default Post