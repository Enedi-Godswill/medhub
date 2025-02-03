
import bgImg from "../assets/doctor-2.jpg"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div className="" >
            <div className="w-full h-screen flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-2 p-5">
                <div className="w-[30%] md:w-[30%] ">
                    <img src={bgImg} className="w-full rounded-4xl p-2 " alt="" />
                </div>
                <div className="w-full sm:w-[50%] flex flex-col items-center sm:items-start gap-3 font-semibold">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase">your health, our priority</h1>
                    <p className="text-center sm:text-left sm:text-2xl md:text-3xl w-[95%] ">At <b>Medhub</b> we offer a full range of healthcare service around you. Experience high-quality compassionate care with experts who are here to support your health journey.</p>
                    <ul className="flex items-center gap-3 capitalize">
                        <li className="border-2 border-solid border-blue-500 p-1 rounded-lg ">
                            <Link to="/about">learn more</Link>
                        </li>
                        <li className="bg-blue-500 p-1 rounded-lg text-white ">
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
