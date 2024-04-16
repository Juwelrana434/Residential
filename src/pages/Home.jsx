import Home1 from "../../src/assets/Home1.jpg";
import Home2 from "../../src/assets/Home2.jpg";
import Home3 from "../../src/assets/Home3.jpg";
import Home4 from "../../src/assets/Home4.jpg";
import Home5 from "../../src/assets/Home5.jpg";
import Home6 from "../../src/assets/Home6.jpg";
import Home8 from "../../src/assets/Home8.jpg";
import Home9 from "../../src/assets/Home9.jpg";
import Home10 from "../../src/assets/Home10.jpg";
import Home11 from "../../src/assets/Home11.jpg";
import Home12 from "../../src/assets/Home12.jpg";
import Home13 from "../../src/assets/Home13.jpg";
import Home14 from "../../src/assets/Home14.jpg";
import { useEffect, useState } from "react";
import Property from "./Property";
import { FaRegStar } from "react-icons/fa";

// import PropertyDetails from "./PropertyDetails";

const Home = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/estatesection.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  // console.log(properties);
  return (
    <div>
      <div className="lg:min-h-[calc(100vh - 450px)] mx-4">
        <div className="carousel w-full relative">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={Home3} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={Home2} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={Home1} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={Home4} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={Home5} className="w-full lg:h-[440px] h-72" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-[100px] absolute lg:top-[675px] flex justify-evenly items-center lg:right-5 md:top-[402px] top-[400px] right-1">
          <div className="bg-white border-y-2 border-[#678bf7] rounded-lg lg:w-36 lg:text-3xl text-sm font-bold text-[#89f160] p-2">
            {" "}
            50K+ <br /> rents
          </div>
          <div className="bg-white border-y-2 border-[#678bf7] rounded-lg lg:w-40 lg:text-3xl text-sm font-bold text-[#89f160] p-2">
            10k+ <br /> Properties
          </div>
          <div className="bg-white border-y-2 border-[#678bf7] rounded-lg lg:w-36 lg:text-3xl text-sm font-bold text-[#89f160] p-2">
            {" "}
            2K+ <br /> Parking
          </div>
        </div> */}
        {/* <div><h1 className="lg:text-[60px] text-white font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% my-6 rounded-lg">
          Welcome To House Of Peace <br />
          Residential Complex
        </h1></div> */}
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bol  text-black mt-6">
          OUR FEATURED PRODUCTS
        </h1>
        <h1 className="text-[20px] mb-6">Select product as your need </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
        {properties.map((property) => (
          <Property key={property.id} property={property}></Property>
        ))}

        {/* {properties.map((property) => (
         <div key={property.id}> 
         <Property key={property.id} property={property}></Property>
         <PropertyDetails pro={property}></PropertyDetails>
         </div>
          
          
        
          
        ))}  */}
      </div>

      <div className="grid lg:md:grid-cols-2 gap-6 p-4 my-6">
        <div className="text-left lg:md:mt-20">
          <h1>About us</h1>
          <h1 className="lg:md:text-5xl font-bold my-6 text-2xl">
            We Transform Houses Into Dream Homes
          </h1>

          <h1>
            Elevate your living spaces with our expert residential architecture
            services. We specialize in creating unique and functional designs
            that reflect your vision and lifestyle.
          </h1>
          <div className="text-left my-4">
            <li>Tailored Excellence​</li>
            <li>Tailored Excellence​</li>
            <li>Innovative Designs​</li>
          </div>
          <button className="btn btn-primary rounded-2xl">Learn More</button>
        </div>
        <div>
          <img src={Home6} className="rounded-t-full h-full" />
        </div>
      </div>
      <div className="text-center text-3xl font-bold py-6">
        Our Special Services
      </div>
      <div className="grid lg:md:grid-cols-2 gap-6 text-left">
        <div className="border-2 rounded-md border-gray-100 p-4 shadow-md">
          <div id="left-side/up">
            <img className="w-full h-[320px]" src={Home8} />
            <h1 className="text-2xl font-bold my-4">Custom Home Design</h1>
            <p className="text-[20px]">
              Tailored architectural designs that blend functionality and
              beauty, ensuring your home is a true reflection of your lifestyle.
            </p>
            <hr className="my-6" />
          </div>
          <div className="flex justify-between items-center">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>

            <button className="btn btn-primary rounded-2xl">
              View Details
            </button>
          </div>
        </div>
        <div className="border-2 rounded-md border-gray-100 p-4 shadow-md">
          <div id="left-side/up">
            <img className="w-full h-[320px]" src={Home9} />
            <h1 className="text-2xl font-bold my-4">Renovation Planning​</h1>
            <p className="text-[20px]">
              Breath new life into your existing space with innovative
              renovation designs that optimize layout and maximize comfort.
            </p>
            <hr className="my-6" />
          </div>
          <div className="flex justify-between items-center">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <button className="btn btn-primary rounded-2xl">
              View Details
            </button>
          </div>
        </div>
        <div className="border-2 rounded-md border-gray-100 p-4 shadow-md">
          <div id="left-side/up">
            <img className="w-full h-[320px]" src={Home10} />
            <h1 className="text-2xl font-bold my-4">Interior Harmony</h1>
            <p className="text-[20px]">
              Seamlessly integrating interior elements for a cohesive and
              inviting ambiance that enhances your everyday living.
            </p>
            <hr className="my-6" />
          </div>
          <div className="flex justify-between items-center">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <button className="btn btn-primary rounded-2xl">
              View Details
            </button>
          </div>
        </div>
        <div className="border-2 rounded-md border-gray-100 p-4 shadow-md">
          <div id="left-side/up">
            <img className="w-full h-[320px]" src={Home11} />
            <h1 className="text-2xl font-bold my-4">
              Green Living Solutions​​​​
            </h1>
            <p className="text-[20px]">
              Incorporating sustainable design principles to create eco-friendly
              homes that embrace energy efficiency.
            </p>
            <hr className="my-6" />
          </div>
          <div className="flex justify-between items-center">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <button className="btn btn-primary rounded-2xl">
              View Details
            </button>
          </div>
        </div>
      </div>
      
{/* our project section  */}
      <div className="text-center mt-6">
        <h1>OUR PROJECTS</h1>
        <h1 className="text-3xl font-bold my-4">A Task Approached With Great Commitment</h1>
        <h1 className="my-6">
          Our passion for design shines through in every detail, ensuring that
          each space we create becomes a masterpiece of comfort and
          functionality.
        </h1>
      </div>
      <div className="mb-20"><div className="grid lg:md:grid-cols-3 gap-6 my-6">
        <div>
          {" "}
          <img src={Home12} className="rounded-t-full h-full border-gray-100 p-4 shadow-md" />
          <h1 className="text-xl font-medium my-1">Urban Oasis Residence</h1>
          <h1>Downtown Loft, New York</h1>
        </div>
        <div className="">
          {" "}
          <img src={Home13} className="rounded-t-full h-full border-gray-100 p-4 shadow-md" />
          <h1 className="text-xl font-medium my-1">Urban Oasis Residence</h1>
          <h1>Downtown Loft, New York</h1>
        </div>
        <div>
          {" "}
          <img src={Home14} className="rounded-t-full h-full border-gray-100 p-4 shadow-md" />
          <h1 className="text-xl font-medium my-1">Urban Oasis Residence</h1>
          <h1 className="">Downtown Loft, New York</h1>
        </div>
      </div></div>
    </div>
  );
};

export default Home;
