import React from "react";

class SearchForm extends React.Component {

    state = {
        searchName: ""
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.search(this.state.searchName)
    }

    render() {
        return (
            <React.Fragment>
                <h2>Search By Name!</h2>
                <form onSubmit={this.submitHandler}>
                    <label>Name:
                        <input
                            type="text"
                            name="searchName"
                            id="name"
                            value={this.state.searchName}
                            onChange={this.changeHandler} />
                    </label>
                    <br></br>
                    <br></br>
                    <button type="submit">Search!</button>
                </form>




            </React.Fragment>
        )
    }
}

export default SearchForm;