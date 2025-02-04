
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="flex flex-col justify-center items-center gap-3 p-3 font-semibold bg-gradient-to-r bg-blue-500 text-white text-xs">
            <h1 className="text-2xl mt-3 uppercase">medhub</h1>
            <ul className="flex justify-center items-center gap-3 capitalize">
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/signup">Join Us</Link>
                </li>
            </ul>
            <hr className="w-[90%] bg-white h-[5px] rounded " />
            <h2 className="mb-4">@Copyright of Adeh Joy</h2>
        </div>
    )
}