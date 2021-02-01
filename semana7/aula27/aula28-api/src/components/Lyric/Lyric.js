import axios from 'axios';
import React from 'react';

export default class Lyric extends React.Component{
    state={
        inputNameValue:'',
        inputSongValue:'',
        lyricSong: '',
    }

    componentDidMount(){
        
    }

    getLyric = () =>{
        axios.get(`https://api.lyrics.ovh/v1/${this.state.inputNameValue}/${this.state.inputSongValue}`)
        .then((response)=>{
        this.setState({lyricSong:response.data.lyrics})
        this.setState({inputNameValue:"",
                       inputSongValue:"" })
        })
        .catch((err) =>console.log(err))
    }

    handleName =(e)=>{
        this.setState({inputNameValue: e.target.value})
    }
    handleSongName= (e) =>{
        this.setState({inputSongValue: e.target.value})
    }

    render(){
        console.log( this.state.lyricSong)
        return (
            <div>
                <h1>Letras de músicas</h1>
                <input onChange={this.handleName} value={this.state.inputNameValue} placeholder="Artist"/>
                <input onChange={this.handleSongName} value={this.state.inputSongValue} placeholder="Song name"/>
                <button onClick={this.getLyric}>Buscar</button>

                <div>{this.state.lyricSong.length > 5 ? this.state.lyricSong : "Música não disponível"}</div>
            
            </div>
        )
    }
}