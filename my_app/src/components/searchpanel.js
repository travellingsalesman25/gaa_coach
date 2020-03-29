import React from 'react';

export class SearchPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {location:''}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({location: event.target.value});
      }

    handleSubmit(event) {
        alert('A location was submitted: ' + this.state.location);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };

        fetch('http://localhost:3001/search',requestOptions)
        .then(response => response.json())
        .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error))   

        event.preventDefault();
    }

    componentDidMount(){

         
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter location: <input type="text" 
                    value={this.state.location} 
                    onChange={this.handleChange}></input>
                </label>
                <label>
                    Enter category: <input type="text" 
                    value={this.state.category} 
                    onChange={this.handleChange}></input>
                </label>
                
                <input type="submit"></input>
            </form>
        )
    }
}