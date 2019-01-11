import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageURL: 'https://swapi.co/api/people',
      nextPage: null,
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.pageURL);
    // this.getCharacters()
  }
  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
        this.setState({ nextPage: data.next});
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  handleNextPage = () => {
    console.log(this);
    this.getCharacters(this.state.nextPage);
    this.setState({pageURL: this.state.nextPage});
    
  }
  // nextCharacters = URL => {
  //   // feel free to research what this code is doing.
  //   // At a high level we are calling an API to fetch some starwars data from the open web.
  //   // We then take that data and resolve it our state.
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ newChars: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

  showSaber(){

  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList 
        starwarsChars={this.state.starwarsChars}
        starwarsPlanets={this.state.starwarsPlanets}/>
        <button>Previous</button>
        <button className="next"onClick={this.handleNextPage}>Next</button>
      </div>
    );
  }
}

export default App;
