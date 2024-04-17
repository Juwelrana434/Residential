import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseAuthProvider/FirebaseProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
// react hook
import { useForm } from "react-hook-form";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
    })
  const { registerUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  // show password 
  const [showPassWord, setShowPassWord]= useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    // use react hook form
    // const {
    //   register,
    //   handleSubmit,
    //   formState: { errors },
    // } = useForm();

    // const onSubmit = (data) => {
    //   console.log(data);
    // };

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }
    if (!/^(?=.*[a-z]).*$/.test(password)) {
      setError("Must have an Lowercase letter in the password");
      return;
    }

    if (password !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    // console.log(name, email, photo, password, confirmpassword);
    registerUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => setError(error.message.split("/")[1]));
    setError("registration successfully");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="lg:text-3 xl text-xl font-bold text-center">
            Please Register
          </h1>
        </div>
        <div className="shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="m-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="file"
                placeholder="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
                <span onClick={ () => setShowPassWord(!showPassWord)} className="absolute top-[50px] right-12">
                { 
                 showPassWord ? <FaRegEye /> :<FaRegEyeSlash />
                 
                 }</span>
              </label>
              <input
                name="password"
                type={ showPassWord ? "text" :"password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
                <span onClick={ () => setShowPassWord(!showPassWord)} className="absolute top-[50px] right-12">
                { 
                 showPassWord ? <FaRegEye /> :<FaRegEyeSlash />
                 
                 }</span>
              </label>
              <input
                name="confirmpassword"
                type={ showPassWord ? "text" :"password"}
                placeholder="confirmpassword"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button name="submit" type="submit" className="btn btn-primary">
                Register
              </button>
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
              <h1 className="text-center">
                Have An Account ?
                <Link to="/login">
                  {" "}
                  <span className="text-[#2aaa46]">Login</span>
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

