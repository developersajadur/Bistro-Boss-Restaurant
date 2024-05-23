import { Link,  useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import bgImg from "../../../public/others/authentication.png";
import formImg from "../../../public/others/authentication2.png";
import {
  FaFacebookF,
  FaGoogle,
  FaRegEye,
  FaRegEyeSlash,
  FaTwitter,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from "sweetalert2";

const Register = () => {
  const axiosPublic = usePublicAxios();
  const navigate = useNavigate();
  const {
    createUser,
    googleLogin,
    twitterLogin,
    facebookLogin,
    updateUserProfile,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleSocialLogin = async (socialProvider) => {
    try {
      const result = await socialProvider();
      if (result.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  const handleGoogleLogin = () => {
    handleSocialLogin(googleLogin);
  };

  const handleTwitterLogin = () => {
    handleSocialLogin(twitterLogin);
  };

  const handleFacebookLogin = () => {
    handleSocialLogin(facebookLogin);
  };

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const captchaValue = document.querySelector("#captchaInput").value;
    if (validateCaptcha(captchaValue)) {
      // create user
      createUser(data.email, data.password)
        .then(() => {
          // update user
          updateUserProfile( data.photoURL, data.name )
          .then(() => {
            const userInfo = {
                name: data.name,
                email: data.email,
            }
            axiosPublic.post("/users", userInfo)
            .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        icon:'success',
                        title: 'Your account has been created',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    if(res.data){
                        navigate("/");
                    }
                }
            }
           
            )
          });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      toast.error("Captcha does not match");
    }
  };

  return (
    <div
      className="w-full z-0 shadow-xl min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-96 z-10 m-20 flex justify-center items-center gap-5">
        <img className="w-96" src={formImg} alt="Form" />
        <div className="flex flex-col gap-2 justify-center text-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-start gap-5"
          >
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <div className="w-full">
              <h6 className="text-lg font-bold">Name</h6>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Type Here Your Name"
                className="input input-bordered w-96"
              />
              {errors.name && (
                <span className="text-sm text-red-500 font-medium -mt-4">
                  Please write your name
                </span>
              )}
            </div>
            <div className="w-full">
              <h6 className="text-lg font-bold">Photo URL</h6>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                name="photoURL"
                placeholder="Type Here Your Photo URL"
                className="input input-bordered w-96"
              />
              {errors.photoURL && (
                <span className="text-sm text-red-500 font-medium -mt-4">
                  Please write your photo URL
                </span>
              )}
            </div>
            <div className="w-full">
              <h6 className="text-lg font-bold">Email</h6>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Type Here Your Email"
                className="input input-bordered w-96"
              />
              {errors.email && (
                <span className="text-sm text-red-500 font-medium -mt-4">
                  Please write your email
                </span>
              )}
            </div>
            <label className="input input-bordered input-warning flex items-center gap-2">
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your Password"
                className="grow"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <FaRegEyeSlash className=" text-2xl" />
                ) : (
                  <FaRegEye className=" text-2xl" />
                )}
              </span>
            </label>
            {errors.password && (
              <span className="text-sm text-red-500 font-medium -mt-4">
                Please write your password
              </span>
            )}
            <div className="w-full">
              <LoadCanvasTemplate />
              <input
                id="captchaInput"
                type="text"
                placeholder="Type The Captcha"
                className="input input-bordered w-96"
              />
            </div>
            <button className="w-full btn bg-[#D1A054B3] text-white">
              Sign Up
            </button>
          </form>
          <p className="text-[#D1A054]">
            Have an Account?{" "}
            <Link className="font-bold" to="/login">
              Sign In Now
            </Link>
          </p>
          <p className="text-[#444444]">Or Sign In With</p>
          <div className="flex justify-center gap-5 mt-2">
            <div
              onClick={handleFacebookLogin}
              className="p-3 cursor-pointer text-[#444444] text-2xl bg-transparent border rounded-full border-[#444444]"
            >
              <FaFacebookF />
            </div>
            <div
              onClick={handleGoogleLogin}
              className="p-3 cursor-pointer text-[#444444] text-2xl bg-transparent border rounded-full border-[#444444]"
            >
              <FaGoogle />
            </div>
            <div
              onClick={handleTwitterLogin}
              className="p-3 cursor-pointer text-[#444444] text-2xl bg-transparent border rounded-full border-[#444444]"
            >
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
