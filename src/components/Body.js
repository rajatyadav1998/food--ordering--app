import ResCrds,{withPromtedLabel} from "./ResCrds"
import restList from "../utils.js/Mockdata"
import { useState } from "react"
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body=()=>{

    // const [ListOfRes,SetListOfRes]=useState([]);
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
   // const RestaurantCardPromoted = withPromtedLabel(ResCrds);
     
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await data.json();
        console.log(json);
        setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log(listOfRestaurants);

   

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) :
    (
        <div className="body">
           <div className="flex items-center justify-center">
             <div className="m-4 p-4">
             <input type="text" className="border border-solid border-black" placeholder="search"  value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} />
             <button className="px-8 py-2 m-4 bg-green-100 rounded-lg" onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}> Search </button>

            </div>

             <div>
            <button className="px-8 py-2 m-4 bg-gray-100 rounded-lg"  onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}> top rated restraun</button>
            </div>

             </div>

            <div className="flex flex-wrap justify-center">
               {
                filteredRestaurant.map((restraun)=>{
                  return(
               
               <Link key={restraun.info.id} to={"/restraun/"+restraun.info.id}>  <ResCrds  restdata={restraun}/></Link>
               /* <Link
            key={restraun?.info.id}
            to={"/restraun/" + restraun?.info.id}
          >
            {restraun?.info.isOpen ? (
              <RestaurantCardPromoted resData={restraun?.info} />
            ) : (
              <ResCrds resData={restraun?.info} />
            )}
          </Link> */

               )
                })
               }
               
               
              
                
              
            </div>
        </div>
        

    )
}

export default Body;