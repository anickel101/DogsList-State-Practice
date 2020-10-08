import React, { Component } from "react";
import "./App.css";
import DogsList from "./Containers/DogsList"
import DogFavorites from "./Containers/DogFavorites"
import CreateForm from "./Components/CreateForm"
import SearchForm from "./Components/SearchForm"
import {apiResponse} from './api.js'

class App extends Component {

  state={
    dogs: apiResponse,
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
      <React.Fragment>
        <div className="app">
          <div className="create-form">
            <CreateForm />
          </div>
          <div className="search-form">
            <SearchForm />
          </div>
          <DogsList dogs={this.state.dogs} appFavoriter={this.appFavoriter}/>
          <DogFavorites favorites={this.state.favorites} appFavoriter={this.appFavoriter}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
