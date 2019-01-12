import React, { Component } from 'react';
import axios from 'axios' 


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
          <button onClick={this.getFactEvent}>Get a new cat FACT!!!
      </button>
      </div>
      </div>
      
    );
  }

  
}

export default FactView;



/*

{
    "_id": "591f98803b90f7150a19c229",
    "__v": 0,
    "text": "In an average year, cat owners in the United States spend over $2 billion on cat food.",
    "updatedAt": "2018-01-04T01:10:54.673Z",
    "deleted": false,
    "source": "api",
    "used": false
}

&*/



