import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
//import { MENU_API,MENU_LAST } from "../utils.js/constants";

const RestraunMenu = () => {

  const [resInfo,SetresInfo]=useState(null);
  const {resid}=useParams();
  console.log(resid);

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER");
      const json= await data.json();
      console.log(json);
      SetresInfo(json.data);
  }
   if (resInfo===null) return <Shimmer/>
  const {name,avgRating,cuisines,costForTwoMessage} =resInfo?.cards[0]?.card?.card?.info;
  const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);
  return (
    <div className="text-center my-4 p-2">
    <h1 className="font-bold text-2xl ">{name}</h1>
    {/* <h3>{avgRating}</h3> */}
    <p className="font-bold my-2 py-2 text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>

    {categories.map((category)=>(<RestaurantCategory data={category?.card?.card}/>))}
    
    {/* <h1>Menu</h1>
      {itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price}</li>))} */}
     
    </div>
   
  )
}

export default RestraunMenu;