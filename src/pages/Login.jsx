import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../FirebaseAuthProvider/FirebaseProvider";
import Home5 from "../../src/assets/Home5.jpg";

const Login = () => {
const {loginUser, googleLogin, setUser, gitHubLogin} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
    loginUser(email, password)
    };
    const handleGoogleLogin = () => {
    googleLogin()
    .then(result => setUser(result.user))
    }
    const handleGitHubLogin = () => {
    gitHubLogin()
    .then(result => setUser(result.user))
    }
    return (
    <div className="" style={{backgroundImage: `url(${Home5})`}}>
            <div className="hero min-h-screen bg-base-200 my-4">
  <div className="flex-col">
    <div className="text-center">
      <h1 className="lg:text-5xl text-xl font-bold text-center">Please Login</h1>
      
    </div>
    <div className="shadow-2xl bg-base-100 mt-2">
      <form onSubmit={handleLogin} className="my-2 px-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button type = "submit" className="btn btn-primary">Login</button>
          <div>
        <div className="text-blue-600 flex justify-center items-center border-2 border-blue-500 rounded-md my-4">
          <FaGoogle />
          <button className="ml-2" onClick={handleGoogleLogin}>Login with google</button>
        </div>
        <div className="text-black flex justify-center items-center border-2 border-black rounded-md mb-4">
        <FaGithub />
          <button className="ml-2" onClick={handleGitHubLogin}>Login with Github</button>
        </div>
      </div>
          <h1 className='text-center pb-2'>Don't Have An Account ?<Link to='/register'> <span className='text-[#2aaa46]'>Register</span></Link></h1>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;