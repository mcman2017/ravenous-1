import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';

import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp (term, location, sortBy) {
       Yelp.search(term, location, sortBy).then(
         newbusinesses => {
             this.setState({businesses: newbusinesses});
            /* console.log(`setting businesses to ${JSON.stringify(newbusinesses)}`);*/

         }
       );
       /*console.log('Searching Yelp with' );
       console.log(`${term}, ${location}, ${sortBy}`);*/


  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>

      </div>
    );
  }
}

export default App;
