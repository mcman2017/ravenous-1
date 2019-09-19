import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
'Highest Rated': 'rating',
'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = { term: '',
                  location: 'USA',
                   sortBy: 'best_match'};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass (sortByOption) {
     if(this.state.sortBy === sortByOption) { return 'active';
   } else { return '';}
  }

  handleSortByChange (sortByOption) {
        this.setState({
          sortBy: sortByOption
        });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
    var code = event.keyCode || event.which;
        if (code === 13 ) {
		if (this.state.term  || this.state.location) {
			this.handleSearch();
                 }
        }
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
    var code = event.keyCode || event.which;
    if (code === 13 ) {
	    if (this.state.term  || this.state.location) { 
		    this.handleSearch(); 
	    }
    }
  }

  handleSearch (event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    if (event) { event.preventDefault(); }
  }

  render () {
    return (
      <div className="SearchBar">
    <div className="SearchBar-sort-options">
     <ul>
       {this.renderSortByOptions()}
     </ul>
   </div>
   <div className="SearchBar-fields">
     <input onKeyUp={this.handleTermChange}
          placeholder="Search Businesses" />
     <input  
	 onKeyUp={this.handleLocationChange}
         placeholder="Where?" />
   </div>
   <div  onClick = {this.handleSearch}
         className="SearchBar-submit">
     <h3>Let''s Go</h3>
   </div>
 </div>
    );

  }

  renderSortByOptions() {
  return Object.keys(sortByOptions).map(sortByOption => {
    let sortByOptionValue = sortByOptions[sortByOption];
    return <li className={this.getSortByClass(sortByOptionValue)}
               onClick ={this.handleSortByChange.bind(this,sortByOptionValue)}
               key={sortByOptionValue}> {sortByOption} </li>;
});
}

}

export default SearchBar;
