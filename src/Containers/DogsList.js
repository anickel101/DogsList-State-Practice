import React, { Component } from "react";
import {apiResponse} from '../api.js'
import DogCard from '../Components/DogCard'

class DogList extends Component {

  handleCards(){
    return apiResponse.map((dog, index) => <DogCard key={index} data={dog}/>)
  }

  render() {
    return <div className="list">{this.handleCards()}</div>;
  }
}

export default DogList;