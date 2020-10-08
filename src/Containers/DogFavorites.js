import React, { Component } from "react";
import DogCard from '../Components/DogCard'

class DogFavorites extends Component {


    handleCards(){
        return this.props.favorites.map((dog, index) => <DogCard key={index} data={dog} appFavoriter={this.props.appFavoriter} liked={true}/>)
    }

  render() {
    return (
        <React.Fragment>
          <div className="favorites">
            <h1>List of Favorites</h1>
            {this.handleCards()}
            </div>
        </React.Fragment>
      )
  }
}

export default DogFavorites;