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

  search = () => {
    console.log("IN APP SEARCH")
  }

  addDog = (dogData) => {
    dogData.id = this.getNextAvailableId();
    this.setState(prevState => {
      return {
        dogs: [...prevState.dogs, dogData]
      }
    })
  }

  getNextAvailableId = () => {
    let currentMaxId = this.state.dogs.reduce((a, b) => a.id > b.id ? a.id : b.id);
    return currentMaxId + 1
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
            <CreateForm addDog={this.addDog}/>
          </div>
          <div className="search-form">
            <SearchForm search={this.search}/>
          </div>
          <DogsList dogs={this.state.dogs} appFavoriter={this.appFavoriter}/>
          <DogFavorites favorites={this.state.favorites} appFavoriter={this.appFavoriter}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
