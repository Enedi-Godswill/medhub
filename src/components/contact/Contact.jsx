
import Navbar from "../Navbar";
import { AiOutlinePhone } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { BiSolidLocationPlus } from "react-icons/bi";
import FAQ from "./FAQ";
import Footer from "../Footer";

export default function Contact(){
    return(
        <div>
            <Navbar />
            <div className="w-full h-[70vh] flex flex-col gap-3 justify-center items-center p-3 " >
                <div className="flex flex-col items-center mb-5 gap-3">
                    <h1 className="text-4xl font-bold">Contact our friendly team</h1>
                    <p>Let us know how we can help.</p>
                </div>
                
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <li className="border-2 border-solid border-[#292929] p-2 rounded-lg ">
                        <BiChat />
                        <p className="capitalize font-semibold ">chat to support</p>
                        <p>we are here to help.</p>
                    </li>
                    <li className="border-2 border-solid border-[#292929] p-2 rounded-lg ">
                        <BiSolidLocationPlus />
                        <p className="capitalize font-semibold">visit us</p>
                        <p>visit our office.</p>
                    </li>
                    <li className="border-2 border-solid border-[#292929] p-2 rounded-lg ">
                        <AiOutlinePhone />
                        <p className="capitalize font-semibold">call us</p>
                        <p>From mon-fri 8am 9am to 5pm.</p>
                    </li>
                </ul>

            </div>
            <FAQ />
            <Footer />
        </div>
    )
}
