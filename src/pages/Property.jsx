
import { Link } from "react-router-dom";
const Property = ({property}) => {
    return (
        <div>
               <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={property.property.image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{property.property.estate_title}</h2>
    <div className="flex"><p>{property.property.segment_name}</p>
    <p>Rent: {property.property.price}/Monthly</p></div>
    <div className="card-actions justify-end">
    <Link to={`/property/${property.property.id}`}><button className="btn btn-primary">Buy Now</button></Link>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Property;