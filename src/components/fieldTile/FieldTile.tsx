import React, {useState} from 'react';


import './FieldTile.css';

type FieldTileTypes = {
  tile: string,
  setMessages?: (arr: string[]) => void, 
  messages: string[]
}

const FieldTile = ({tile, setMessages, messages}: FieldTileTypes) => {

  const [planted, setPlanted] = useState (false);

// get color for tile
const getColorForTile = (tile: string) => {

    let color;

    switch (tile){
      case 'W':
        color = "blue";
        break;
      case 'L': 
        if(planted){
          color = 'yellow'
        } else {
          color = "bisque";
        }
        break;
      case 'F':
        color = "green";
        break;
      default:
        color = "brown";
    }

    return color;
  }

  const plantCorn = (event:  React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLElement;
    const tileType = element.id;

    let message = 'You have planted corn here.';

    switch (tileType){
      case 'W':
        setMessages && setMessages(['You cannot plant corn on the water.', ...messages])
        break;
      case 'L': 
        setMessages && setMessages([message, ...messages])
        setPlanted(true);
        break;
      case 'F':
        setMessages && setMessages(['You cannot plant corn in the forest.', ...messages])
        break;
      default:
        setMessages && setMessages(['You cannot plant corn on your house.', ...messages])

    }
  }

  if(planted)
    console.log('this tile is planted')

  return (
    <div 
      className="fieldTile"
      style={{"backgroundColor": getColorForTile(tile)}}
      onClick={plantCorn}
      id={tile}
    > 
      {tile} 
    </div>
  )
}

export default FieldTile