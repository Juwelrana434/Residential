import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const [details, setDetails] = useState([]);
  const [estateDetails, setEstateDetails] = useState([]);

  useEffect(() => {
    fetch("/estatesection.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  // console.log(details);

  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);
  const detail = details.find((detail) => detail.property.id == idInt);
  // console.log(detail);
  // setEstateDetails(detail);
  // console.log(estateDetails);

  return (
    <div className="my-6">
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 gap-6">
        <div className="border-2 rounded-md border-gray-100 p-4 shadow-md" id="left-side/up">
             <img className="w-full h-full" src={detail?.property?.image_url}/>
        </div>
        <div className="border-2 rounded-md border-gray-100 p-4 shadow-md" id="right-side/footer">
        <h1 className="font-bold text-2xl text-[#0b5f10]">{detail?.property?.estate_title}</h1>
          <h1> <span className="text-[#0b5f10]">Short Description</span> :{detail?.property?.description}</h1>
          
          <div className="grid lg:md:grid-cols-2">
          <div className="text-left">
          <h1 className="text-xl font-medium text-[#0b5f10] text-left">Location</h1>
          <li> <span className=" ">City :</span>    {detail?.property?.location?.city}</li>
          <li> <span className=" ">State :</span>   {detail?.property?.location?.state}</li>
          <li> <span className=" ">Country :</span> {detail?.property?.location?.country}</li>
          <li> <span className=" ">Zipcode :</span> {detail?.property?.location?.zipcode}</li></div>
          
          
          <div className="text-left">
          <h1 className="text-xl font-medium text-[#0b5f10] text-left">Area</h1>
          <h1> total_sqft :{detail?.property?.area?.total_sqft}</h1>
          <h1> Number of bedrooms :{detail?.property?.area?.bedrooms}</h1>
          <h1> Number of Garage{detail?.property?.area?.garage}</h1></div>
          
          
          <div className="text-left">
          <h1 className="text-xl font-medium text-[#0b5f10] text-left">Feature</h1>
          <li>{detail?.property?.features?.[0]}</li>
          <li>{detail?.property?.features?.[1]}</li>
          <li>{detail?.property?.features?.[2]}</li>
          <li>{detail?.property?.features?.[3]}</li>
          <li>{detail?.property?.features?.[4]}</li>
          </div>
          
         <div className="text-left"> 
         <h1 className="text-xl font-medium text-[#0b5f10] text-left">About</h1>
           <h1> Segment name :{detail?.property?.segment_name}</h1>
          <h1>Status : {detail?.property?.status}</h1>
          <h1> Price : {detail?.property?.price}</h1>
          </div>
          
          <div className="text-left">
          <h1 className="text-xl font-medium text-[#0b5f10] text-left"> please contract </h1>
          <li>{detail?.property?.contact?.agent_name}</li>
          <li>{detail?.property?.contact?.agent_email}</li>
          <li>{detail?.property?.contact?.agent_phone}</li></div></div>
          <button className="btn btn-primary w-full">Booking Now</button>
        
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
