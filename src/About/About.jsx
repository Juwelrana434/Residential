import Home12 from "../../src/assets/Home12.jpg";
import Home13 from "../../src/assets/Home13.jpg";
import Home14 from "../../src/assets/Home14.jpg";

const About = () => {
  return (
    <div>
    <div><h1 className="lg:text-[60px] text-white font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% my-6 rounded-lg">
          Welcome To House Of Peace <br />
          Residential Complex
        </h1></div> 
      {/* our project section  */}
      <div className="text-center mt-6">
        <h1>OUR PROJECTS</h1>
        <h1 className="text-3xl font-bold my-4">
          A Task Approached With Great Commitment
        </h1>
        <h1 className="my-6">
          Our passion for design shines through in every detail, ensuring that
          each space we create becomes a masterpiece of comfort and
          functionality.
        </h1>
      </div>
      <div className="mb-20">
        <div className="grid lg:md:grid-cols-3 gap-6 my-6">
          <div>
            {" "}
            <img
              src={Home12}
              className="rounded-t-full h-full border-gray-100 p-4 shadow-md"
            />
            <h1 className="text-xl font-medium my-1">Urban Oasis Residence</h1>
            <h1>Downtown Loft, New York</h1>
          </div>
          <div className="">
            {" "}
            <img
              src={Home13}
              className="rounded-t-full h-full border-gray-100 p-4 shadow-md"
            />
            <h1 className="text-xl font-medium my-1">Urban Oasis Residence</h1>
            <h1>Downtown Loft, New York</h1>
          </div>
          <div>
            {" "}
            <img
              src={Home14}
              className="rounded-t-full h-full border-gray-100 p-4 shadow-md"
            />
            <h1 className="text-xl font-medium my-1">Urban Oasis Residence</h1>
            <h1 className="">Downtown Loft, New York</h1>
          </div>
        </div>
      </div>
      <div className="grid lg:md:grid-cols-3 gap-6 px-4">
          <div className="bg-white border-y-2 border-[#678bf7] rounded-lg  lg:text-3xl text-sm font-bold text-[#89f160] p-2">
            {" "}
            50K+ <br /> rents
          </div>
          <div className="bg-white border-y-2 border-[#678bf7] rounded-lg lg:text-3xl text-sm font-bold text-[#89f160] p-2">
            10k+ <br /> Properties
          </div>
          <div className="bg-white border-y-2 border-[#678bf7] rounded-lg  lg:text-3xl text-sm font-bold text-[#89f160] p-2">
            {" "}
            2K+ <br /> Parking
          </div>
        </div> 
         
    </div>
  );
};

export default About;
