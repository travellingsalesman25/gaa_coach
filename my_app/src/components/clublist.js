import React from 'react';

export class ClubList extends React.Component{
    state={
        clubs:[]
    }

    componentDidMount(){
        
        fetch('http://localhost:3001/clubs')
        .then(response => response.json())
        .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
            this.setState({
                clubs : data.clubs
            });
        })
        .catch(error => console.error(error))       
    }

    render(){
        return(
            <div>{this.state.clubs}</div>
        )
    }
}