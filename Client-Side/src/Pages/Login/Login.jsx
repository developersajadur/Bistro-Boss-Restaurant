import { Link, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form";
import bgImg from "../../../public/others/authentication.png"
import formImg from "../../../public/others/authentication2.png"
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const captchaValue = document.querySelector("#captchaInput").value;
        if (validateCaptcha(captchaValue)) {
            // Replace this with your actual sign-in logic
            // signInUser(data.email, data.password)
            //     .then((result) => {
            //         if (result.user) {
            //             toast.success('Login successful');
            //             navigate(location?.state || "/");
            //         }
            //     })
            //     .catch(error => {
            //         toast.error(error.message);
            //     });
            console.log(data);
            toast.success('Captcha validated and form submitted');
        } else {
            toast.error("Captcha does not match");
        }
    };

    return (
        <div className="w-full z-0 shadow-xl min-h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-96 z-10 m-20 flex justify-center items-center gap-5">
                <img className="w-96" src={formImg} alt="Form" />
                <div className="flex flex-col gap-2 justify-center text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-start gap-5">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <div className="w-full">
                            <h6 className="text-lg font-bold">Email</h6>
                            <input {...register("email", { required: true })} type="text" placeholder="Type Here Your Email" className="input input-bordered w-96" />
                            {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please write your email</span>}
                        </div>
                        <div className="w-full">
                            <h6 className="text-lg font-bold">Password</h6>
                            <input {...register("password", { required: true })} type="password" placeholder="Type Here Your Password" className="input input-bordered w-96" />
                            {errors.password && <span className="text-sm text-red-500 font-medium -mt-4">Please write your password</span>}
                        </div>
                        <div className="w-full">
                            <LoadCanvasTemplate />
                            <input id="captchaInput" type="text" placeholder="Type The Captcha" className="input input-bordered w-96" />
                        </div>
                        <button className="w-full btn bg-[#D1A054B3] text-white">Sign In</button>
                    </form>
                    <p className="text-[#D1A054]">New Here? <Link className="font-bold" to="/register">Create a New Account</Link></p>
                    <p className="text-[#444444]">Or Sign In With</p>
                    <div className="flex justify-center gap-5 mt-2">
                        <div className="p-3 cursor-pointer text-[#444444] text-2xl bg-transparent border rounded-full border-[#444444]">
                            <FaFacebookF />
                        </div>
                        <div className="p-3 cursor-pointer text-[#444444] text-2xl bg-transparent border rounded-full border-[#444444]">
                            <FaGoogle />
                        </div>
                        <div className="p-3 cursor-pointer text-[#444444] text-2xl bg-transparent border rounded-full border-[#444444]">
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
