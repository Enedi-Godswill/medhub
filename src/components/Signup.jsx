
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import bgImg from "../components/assets/hospital.jpg"

export default function Signup(){
    return(
        <div>
            <Navbar />
            <div className="w-full h-screen flex justify-center items-center p-3 bg-cover bg-center bg-no-repeat sm:bg-none gap-3 " >
                <div className="flex flex-col sm:flex-row gap-4 lg:w-[80%] ">
                    <img src={bgImg} className="rounded-2xl hidden sm:flex sm:w-[50%] md:w-[40%] " alt="" />
                    <form className="flex justify-center flex-col gap-2 sm:w-[50%] md:w-[40%] border-2 border-[#1d1d1d] rounded-md w-[90%] p-3 ">
                        <h1 className="font-bold text-3xl mb-4 ">Create an account</h1>
                        <div className="flex items-center gap-3 mb-3 ">
                            <h1>Already have an account</h1>
                            <Link to="/login" className="text-blue-400 ">Click here</Link>
                        </div>
                        <div className="flex gap-2 ">
                            <input className="w-[50%] border-2 border-[#1d1d1d] rounded-lg p-2 " type="text" placeholder="first name" required />
                            <input className="w-[50%] border-2 border-[#1d1d1d] rounded-lg p-2 " type="text" placeholder="last name" required />
                        </div>
                        <input type="email" placeholder="email" className="border-2 border-[#1d1d1d] p-2 rounded-lg " required />
                        <input type="password" placeholder="enter password" className="border-2 border-[#1d1d1d] p-2 rounded-lg " required />
                        <div className="flex gap-3">
                            <input type="checkbox" required />
                            <p>I agree to the <Link to="/terms" className="text-blue-600 " >terms and conditions</Link> </p>
                        </div>
                        <button className="bg-white text-black w-[17%] rounded-md p-1 text-left capitalize font-semibold " type="submit">submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
