import React from 'react';
import './App.css';
import axios from 'axios';
import Lyric from './components/Lyric/Lyric';

export default class App extends React.Component {
  state = {
    allShips: [],
    inputSearchValue: "",
    oneShip: [0],
    showOneShip: true,
    showLyric: true
  }
  componentDidMount() {
    this.getAllShips()
  }

  getAllShips = () => {
    axios.get("//api.spacexdata.com/v3/ships").
      then((response) => {
        this.setState({ allShips: response.data })
      })
      .catch((err) => console.log(err))
  }

  handleSearch = (e) => {
    this.setState({ inputSearchValue: e.target.value })
  }

  getOneShip = (id) => {
    axios.get(`https://api.spacexdata.com/v3/ships/${id}`)
      .then((response) => {
        this.setState({ oneShip: response.data })
        this.setState({ showOneShip: false })
      })
      .catch((err) => { console.log(err) })
  }

  locateShip = () => {
    this.state.allShips.map((ship) => {
      if (ship.ship_name === this.state.inputSearchValue) {
        this.getOneShip(ship.ship_id)
      }
    })
    this.setState({ inputSearchValue: "" })
  }
  backToList = () => {
    this.setState({
      showOneShip: true
    })
  }

  changePage = () =>{
    this.setState({showLyric: !this.state.showLyric})
  }

  render() {

    const ships = this.state.allShips.map((ship) => {
      return (
        <tr key={ship.ship_id}>
          <td>{ship.ship_name}</td>
          <td>{ship.ship_type}</td>
          <td>{ship.image ? (<img src={ship.image} />) : "No image"}</td>
          <td><a href={ship.url} target="_blank">Link</a></td>
        </tr>
      )
    })

    const shipLocated = (
      <tr key={this.state.oneShip.ship_id}>
        <td>{this.state.oneShip.ship_name}</td>
        <td>{this.state.oneShip.ship_type}</td>
        <td>{this.state.oneShip.image ? (<img src={this.state.oneShip.image} />) : "No image"}</td>
        <td><a href={this.state.oneShip.url} target="_blank">Link</a></td>
        <td><button onClick={this.backToList}>Voltar</button></td>
      </tr>
    )
    console.log(this.state.showOneShip)

    const printShips = (<div>
      <h1>Naves da SpaceX</h1>

      <input onChange={this.handleSearch} value={this.state.inputSearchValue} />
      <button onClick={this.locateShip}>Procurar Navio</button>

      <table>
        <tr>
          <td>Nome</td>
          <td>Tipo</td>
          <td>Imagem</td>
        </tr>

        {this.state.showOneShip ? ships : shipLocated
        }
      </table>
    </div>
    )

    return (
      <div className="App">
        <button onClick={this.changePage}>Trocar página</button>

      {this.state.showLyric ? <Lyric/> : printShips}

      </div>
    );
  }
}
