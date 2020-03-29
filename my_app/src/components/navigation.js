import React from 'react';

export class Navigation extends React.Component{
    render(){
        return(
            
                <nav>
                    <ul>
                        <li><a href='/about'>about</a></li>
                        <li><a href='/notice'>notice board</a></li>
                        <li><a href='/reviews'>reviews</a></li>
                        <li><a href='/signin'>sign in</a></li>
                    </ul>
                </nav>
            
        )
        
    }
}