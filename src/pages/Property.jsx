
import { Link } from "react-router-dom";
// import { AuthContext } from "../FirebaseAuthProvider/FirebaseProvider";
// import { useContext } from "react";
const Property = ({property}) => {

// const{user} = useContext(AuthContext)

    return (
        <div>
               <div className="card bg-base-100 shadow-xl">
  <div className="w-full mb-4"><img src={property.property.image_url} className="w-full h-[280px] border-2 rounded-md border-gray-100 p-4 shadow-md"/></div>
  <div className="">
    <h2 className="card-title my-2 px-4">{property.property.estate_title}</h2>
    <div className="flex justify-between items-center px-4"><p>{property.property.segment_name}</p>
    <p className="p-4">Rent: {property.property.price}</p></div>
    <div className="card-actions justify-end ">
    
    <div className="w-full my-4 px-4"><Link to={`/property/${property.property.id}`}><button className="btn btn-primary w-full">View Details</button></Link></div>
    
  
    {/* {
    user && <Link to={`/property/${property.property.id}`}><button className="btn btn-primary">Buy Now</button></Link>
    
    } */}
    </div>
  </div>
</div>
        </div>
    );
};

export default Property;