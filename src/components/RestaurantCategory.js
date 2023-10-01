 import { useState } from 'react';
import ItemList from "./ItemList";
const RestaurantCategory = ({data}) => {
    console.log(data);

    const [showItems, SetshowItems] = useState(false);

    const handleClick=()=>{

       SetshowItems(!showItems);
    }
  return (
    <div>

      <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4 ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="font-bold">{data.title} ({data.itemCards.length})</span>
      <span>⬇️</span>
      </div>
      {   showItems && <ItemList items={data.itemCards}/>}
    </div>

    
    
    
    
    
    </div>
  )
}

export default RestaurantCategory