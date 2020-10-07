import React from "react";

class DogCard extends React.Component {

  state={
    liked: this.props.liked
  }

  liker = () => {
    this.props.appFavoriter(this.props.data)
  }

  addButton = () => {
    if (!this.state.liked) {
      return <button onClick={this.liker}>Favorite</button>
    } else {
      return <button onClick={this.liker}>Unfavorite</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <h2 >{this.props.data.name}</h2>
          <img alt="" src={this.props.data.img} />
          {this.addButton()}
        </div>
      </div>
    );
  }
}

export default DogCard;