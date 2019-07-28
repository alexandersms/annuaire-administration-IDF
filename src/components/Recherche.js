import React, { Component } from 'react';
import { Button, Select } from 'semantic-ui-react';
import './Recherche.css';

class Recherche extends Component {

    state = {
        dpt: "",
        type: "",
    }

    onDptChange = (e, data) =>{
        this.setState({dpt: data.value})
    }

    onTypeChange = (e, data) =>{
        this.setState({type: data.value})
    }

    render() { 

        const optionsDpt = [
            { value: "75", key: "75", text: "Paris" },
            { value: "77", key: "77", text: "Seine-et-Marne" },
            { value: "78", key: "78", text: "Yvelines" },
            { value: "91", key: "91", text: "Essonne" },
            { value: "92", key: "92", text: "Hauts-de-Seine" },
            { value: "93", key: "93", text: "Seine-Saint-Denis" },
            { value: "94", key: "94", text: "Val-de-Marne" },
            { value: "95", key: "95", text: "Val-d'Oise" },
        ];

        const optionsType = [
            {value: "afpa", key:"afpa", text:"Association nationale pour la formation professionnelle des adultes (AFPA)"},
            {value: "caf", key:"caf", text:"Caisse d’allocations familiales"},
            {value: "cpam", key:"cpam", text:"Caisse primaire d’assurance maladie"},
            {value: "mairie", key:"mairie", text:"Mairie"},
            {value: "ofii", key:"ofii", text:"Office français de l’immigration et de l’intégration"},
            {value: "pole_emploi", key:"pole_emploi", text:"Pôle emploi"},
            {value: "tgi", key:"tgi", text:"Tribunal de grande instance"},
        ];

        return (
            <div className="recherche">
                <Select placeholder="Choisissez un département" onChange={this.onDptChange} options={optionsDpt} value ={this.state.dpt}/>

                <Select placeholder="Choisissez une administration" onChange={this.onTypeChange} options={optionsType} value ={this.state.type}/>

                <Button primary onClick = {()=> this.props.onSearch(this.state.dpt, this.state.type)} >Lancer la recherche</Button>
                <Button secondary onClick = {this.props.onEmpty} >Vider la recherche</Button>
            </div>
        );
    }
}
 
export default Recherche;