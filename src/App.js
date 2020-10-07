import React, { Component } from "react";
import "./App.css";
import DogsList from "./Containers/DogsList"
import DogFavorites from "./Containers/DogFavorites"

class App extends Component {

  state={
    favorites: []
  }


  appFavoriter = (dog) => {
    if(!this.state.favorites.includes(dog)) {
      this.setState({
        favorites: [...this.state.favorites, dog]
      })
    } else {
      this.setState({
        favorites: this.state.favorites.filter(function (checkDog) {
          return checkDog.name !== dog.name
        })
      })
    }
  }

  render() {
    return (
      <div className="app">
        <DogsList appFavoriter={this.appFavoriter}/>
        <DogFavorites favorites={this.state.favorites} appFavoriter={this.appFavoriter}/>
      </div>
    );
  }
}

export default App;
