import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'José'}
          fotoUsuario={'https://picsum.photos/id/1/200/300'}
          fotoPost={'https://picsum.photos/id/2/200/150'}
        />
        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://picsum.photos/id/3/200/300'}
          fotoPost={'https://picsum.photos/id/4/200/150'}
        />
      </div>
    );
  }
}

export default App;
