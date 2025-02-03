
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import {AiOutlineLock} from "react-icons/ai"
import Gmap from "../assets/Gmap.png"

export default function ContactUs(){
    return(
        <div className="flex flex-col sm:flex-row justify-around items-center gap-5 text-xs md:text-xl p-8 ">
            <ul className="w-[30rem] flex flex-col flex-wrap sm:flex-nowrap sm:flex-row gap-2 mb-4 ml-5 ">
                <li className="font-semibold flex flex-col gap-1 capitalize ">
                    <AiOutlineMail className="text-xs sm:text-2xl" />
                    <h1 className="font-bold ">Email</h1>
                    <p>for inquiries and appointments</p>
                    <p className="underline">info@medicarpro.com</p>
                </li>
                <li className="font-semibold flex flex-col gap-1 capitalize ">
                    <AiOutlinePhone className="text-xs sm:text-2xl" />
                    <h1 className="font-bold ">Phone</h1>
                    <p>for inquiries and appointments</p>
                    <p className="underline">info@medicarpro.com</p>
                </li>
                <li className="font-semibold flex flex-col gap-1 capitalize ">
                    <AiOutlineLock className="text-xs sm:text-2xl" />
                    <h1 className="font-bold rounded-lg ">Office</h1>
                    <p>for inquiries and appointments</p>
                    <p className="underline">info@medicarpro.com</p>
                </li>
            </ul>
            <div className="w-[15rem] sm:w-[20rem] ">
                <img src={Gmap} className="rounded-3xl " alt="" />
            </div>
        </div>
    )
}