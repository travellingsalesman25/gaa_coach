import React from 'react';
import { ClubList } from './clublist.js';

export class NoticeBoard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {brand: "Ford json object",
        cars:[ "Ford", "BMW", "Fiat" ] };
      }
    render(){
       return(
           <article>
                <div>
                    <ul> 
                        <li class="clubList" style={{padding:"2px"}}>club #1 </li>
                        <li class="clubList" style={{padding:"2px"}}>club #2</li>
                        <li class="clubList" style={{padding:"2px"}}>club #3</li>
                        <ClubList />
                    </ul>
                </div>
           </article>
       ) 
    }
}