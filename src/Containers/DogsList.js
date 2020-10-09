import React, { Component } from "react";
import {apiResponse} from '../api.js'
import DogCard from '../Components/DogCard'

class DogList extends Component {

  handleCards(){
    if (this.props.filteredDogs.length === 0) {
      return this.props.dogs.map((dog, index) => <DogCard key={index} data={dog} appFavoriter={this.props.appFavoriter} liked={false}/>)
    } else {
      return this.props.filteredDogs.map((dog, index) => <DogCard key={index} data={dog} appFavoriter={this.props.appFavoriter} liked={false}/>)
    }

  }

  render() {
    return (
      <React.Fragment>
        <div className="list">
          <h1>List of Dogs</h1>
          {this.handleCards()}
          </div>
      </React.Fragment>
    )
  }
}

export default DogList;