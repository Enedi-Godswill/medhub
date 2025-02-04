
import { AiFillStar } from "react-icons/ai"
import testImg from "../assets/doctor.jpeg"

export default function Clients(){
    return(
        <div className="flex flex-col sm:flex-row h-[20rem] sm:h-[25rem] justify-center sm:justify-around items-center p-4 gap-3 text-xs sm:text-xl bg-gradient-to-r bg-blue-400 ">
            <div className="w-[25rem] flex flex-col justify-center gap-4 ">
                <h1 className="font-bold uppercase text-2xl">what our members saying about us</h1>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, adipisci! Voluptas aliquam dolores unde iste pariatur accusantium facere?</p>
            </div>
            <div className="w-[25rem] flex flex-col justify-center gap-4 p-2 bg-white text-black rounded-md ">
                <div className="flex justify-between items-center gap-2 ">
                    <div className="flex gap-2">
                        <img src={testImg} className="rounded-full w-[2rem] " alt="" />
                        <div className="flex flex-col font-semibold capitalize">
                            <p>john doe</p>
                            <p>7/11/2024</p>
                        </div>
                    </div>
                    <div className="flex items-center text-yellow-500">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, consequatur ipsa! Error impedit corporis iusto culpa provident dolores. Quidem accusantium vitae aliquam deserunt consequuntur velit?</p>
                </div>
            </div>
        </div>
    )
}