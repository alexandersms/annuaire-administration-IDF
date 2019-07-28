import React, { Component } from 'react';
import Recherche from './components/Recherche'
import './App.css';
import { Message, Card } from 'semantic-ui-react';
import Etablissement from './components/Etablissements';

class App extends Component {

  state = {
    data: [],
    error: "",
    
  }

  onEmpty = () => {
    this.setState({
      data:[],
      error: "",
    })
  }

  onSearch = async (dpt, type) => {
    if (dpt && type) {
      try {
        let reponse = await fetch(`https://etablissements-publics.api.gouv.fr/v1/organismes/${dpt}/${type}`) 
        let data = await reponse.json();
        
        this.setState({
          data: data.features,
          error: "",
        })

      } catch (e) {
        this.setState({
          error: "Erreur lors de la recherche"
        })
      }
    } else {
      this.setState({
        error: "Merci de choisir un département et un établissement"
      })
    }
  }

  renderResults = () =>{
    return this.state.data.map((etablissement) => {
      return <Etablissement key = {etablissement.properties.id} properties = {etablissement.properties}/>
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Annuaire des administrations en Île-de-France</h1>
          <Recherche onSearch={this.onSearch} onEmpty={this.onEmpty}/>
          { this.state.error ? <Message warning>{this.state.error}</Message> : undefined }
          { this.state.data ? 
            <Card.Group>
              { this.renderResults() }
            </Card.Group> : undefined 
          }  
      </div>
    );
  }
}

export default App;
