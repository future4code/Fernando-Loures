import React from "react";
import Etapa1 from "./components/etapa1/Etapa1";
import Etapa2 from "./components/etapa2/Etapa2";
import Etapa3 from "./components/etapa3/Etapa3";
import Final from "./components/final/final"

export default class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 
          irProximaEtapa={this.irProximaEtapa}
        />;
      case 2:
        return <Etapa2 irProximaEtapa={this.irProximaEtapa}/>;
      case 3:
        return <Etapa3 irProximaEtapa={this.irProximaEtapa}/>;
      case 4:
        return (<Final />);
      default:
         return <Etapa1/>;
    }
  }


  irProximaEtapa = (valor =1) =>{
    this.state.etapa <4 ? this.setState({etapa: this.state.etapa+valor}) : this.setState({etapa: 1})
    console.log(this.state.etapa)
  }

  render() {
    return (
      <div className="app">
        {this.renderizaEtapa()}
        
      </div>
    );
  }
}