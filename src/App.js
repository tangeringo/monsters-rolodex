import React, { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({ monsters: user }))
  }

  handleInputChange = (event) => {
    this.setState({ searchField: event.target.value })
  } 

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchField placeholder="search monsters" handleInputChange={this.handleInputChange}/>
        <Cardlist monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
