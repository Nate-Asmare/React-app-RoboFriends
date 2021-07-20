import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // if(true){
    //     throw new Error('Noooo!');
    // }
    return (                
        <div>
            { //the return from the map function will be an array of cards so we need to specify it's a javascript by using {} 
                 robots.map((user, id) => {   
                     return (  //map function is always required to return
                        <Card 
                            key={id}
                            id={user.id}
                            name={user.name} 
                            email={user.email}
                        />
                     );           
                 })
            }
        </div> 
    );
}

export default CardList;