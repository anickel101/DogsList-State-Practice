import React from "react";

class CreateForm extends React.Component {

    state={
        name: "",
        breed: "",
        img: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
            })
        }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addDog(this.state)
        this.setState({
            name: "",
            breed: "",
            img: ""
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Add a Dog!</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: 
                            <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <label>Breed: 
                            <input id="breed" name="breed" type="text" value={this.state.breed} onChange={this.handleChange}  />
                        </label>
                        <br></br>
                        <label>Image: 
                            <input id="img" name="img" type="text" value={this.state.img} onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <br></br>
                    </div>
                    <div>
                        <button type="submit">Add Dog!</button>
                    </div>


                </form>
            </React.Fragment>
        )
    }
}

export default CreateForm;


// "id": 2,
// "name": "Alfred von Wigglebottom",
// "img": "https://images.wagwalkingweb.com/media/grooming_guides/general/groom-a-dog-with-long-hair/hero/groom-a-dog-with-long-hair.jpg",
// "breed": "Afghan Hound"