import { IMG_URL } from "../utils.js/constants";
    const ResCrds = (props) => {
    const {restdata}=props;

  const {cloudinaryImageId,name,avgRating,costForTwo}=restdata?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-300 hover:bg-gray-400">
        <img className="rounded-lg w-[218px] h-[218px]" src={IMG_URL+
              cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h3>North Indian,Cusines</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
       
    </div>
  )
}

// export const withPromtedLabel = (ResCrds) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
//           Promoted
//         </label>
//         <ResCrds {...props} />
//       </div>
//     );
//   };
// };

export default ResCrds;