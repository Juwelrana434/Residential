import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Register = () => {
    return (
    
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="lg:text-5xl text-xl font-bold text-center">Please Register</h1>
      
    </div>
    <div className="shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input name='photo' type="" placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input name='confirmpassword' type="password" placeholder="confirmpassword" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <div>
        <div className="text-blue-600 flex justify-center items-center border-2 border-blue-500 rounded-md my-4">
          <FaGoogle />
          <button className="ml-2">Login with google</button>
        </div>
        <div className="text-black flex justify-center items-center border-2 border-black rounded-md mb-4">
        <FaGithub />
          <button className="ml-2">Login with Github</button>
        </div>
      </div>
          <h1 className='text-center'>Have An Account ?<Link to='/login'> <span className='text-[#2aaa46]'>Login</span></Link></h1>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;