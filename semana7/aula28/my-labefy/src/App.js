import React from 'react';
import './App.css';
import Create from './components/Create/Create';
import ListMusic from './components/ListMusic/ListMusic';
import styled from 'styled-components';
import { BtnApp, AppDiv, Title, Container, AppDiv2, Footer} from './styled';
import Spotify from './components/Spotify/Spotify';



export default class App extends React.Component {
  state = {
    showPlaylists: true
  }
  changePage = () => {
    this.setState({ showPlaylists: !this.state.showPlaylists })
  }
  render() {
    return (
      <AppDiv>
        <Title>Labefy</Title>

        <AppDiv2>
          <div>
            {
              this.state.showPlaylists ?
                (<Container><ListMusic /><BtnApp onClick={this.changePage}>Nova Playlist</BtnApp></Container>) :
                (<Container><Create /><BtnApp onClick={this.changePage}>Playlists</BtnApp></Container>)
            }
          </div>
          <Spotify/>
          
          
        </AppDiv2>
        <Footer>
          <p>Todos os direitos reservados</p>
        </Footer>


      </AppDiv>
    );
  }
}