import React from "react";

class DogCard extends React.Component {
  constructor() {
    super()
    this.state = {
      barking: false
    }
  }

  clickHandler = () => {
    this.setState(previousState => {
      return {
        barking: !previousState.barking
      }
    })
  }

  bark = () => {
    if(this.state.barking) {
      return <h2>Bark</h2>
    }
  }


  render() {
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.data.name}</h2>
          <img alt="" src={this.props.data.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler}>Bark</button>
        </span>
        {this.bark()}
      </div>
    );
  }
}

export default DogCard;