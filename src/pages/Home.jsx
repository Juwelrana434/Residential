import Home1 from "../../src/assets/Home1.jpg";
import Home2 from "../../src/assets/Home2.jpg";
import Home3 from "../../src/assets/Home3.jpg";
import Home4 from "../../src/assets/Home4.jpg";
import Home5 from "../../src/assets/Home5.jpg";
import { useEffect, useState } from "react";
import Property from './Property';
import PropertyDetails from './PropertyDetails';


const Home = () => {
const [properties, setProperties] = useState([]);
useEffect(() => {
fetch("estatesection.json")
.then((res) => res.json())
.then((data) => setProperties(data));
},[]);
console.log(properties);
  return (
    <div>
      <div className="lg:min-h-[calc(100vh - 450px)] mb-4">
        <h1 className="lg:text-[60px] text-white font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% my-6 rounded-lg">
          Welcome To House Of Peace <br />
          Residential Complex
        </h1>
        <div className="carousel w-full relative">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={Home1} className="w-full lg:h-[440px] h-72" />
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
            <img src={Home3} className="w-full lg:h-[440px] h-72" />
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
        <div className="w-full h-[100px] absolute lg:top-[675px] flex justify-evenly items-center lg:right-5 md:top-[402px] top-[400px] right-1">
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
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
      {
      properties.map((property) =>(<Property key={property.id} property={property}></Property>))
    
      }
      
      </div>
    </div>
  );
};

export default Home;
