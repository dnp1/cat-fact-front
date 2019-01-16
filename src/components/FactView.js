import React, { Component } from 'react';
import axios from 'axios' 
import '../App.css'

class FactView extends Component {
    constructor(props) {
        super(props);
        this.state = {fact: null};
        this.getFact()
        // This binding is necessary to make `this` work in the callback
        this.getFactEvent = this.getFactEvent.bind(this);
    }
    async getFact() {
        const response = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal=cat', { crossdomain: false })
        this.setState({fact: response.data}) 
    }

    async getFactEvent(e){
        const response = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal=cat', { crossdomain: false })
        this.setState({fact: response.data}) 
    }

  render() {
    return (
        <div>
            <div>
        { this.state.fact !== null ? 
            (<p>Meu Fato: {this.state.fact.text}</p>)
            : null}

      </div>
      <div>
          <button  className="App-button-link"  onClick={this.getFactEvent}>Get a new cat FACT!!!
      </button>
      </div>
      </div>
      
    );
  }

  
}

export default FactView;
