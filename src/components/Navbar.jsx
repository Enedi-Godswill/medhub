
import { useState } from "react"
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom"

export default function Navbar(){

    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu((currentState) => (!currentState))
    }

    return(
        <div className="fixed top-0 left-0 w-full flex justify-between items-center gap-3 p-3 text-sm capitalize bg-white ">
            <h1 className="text-xl font-semibold ">MedHub</h1>
            <div className={`absolute top-12 right-6 bg-white p-2 flex flex-col sm:static sm:flex sm:flex-row sm:items-center gap-3 text-sm ${menu ? "flex" : "hidden" } `}>
                <ul className="flex flex-col sm:flex-row gap-2 ">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about us</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
                <ul className="flex flex-col sm:flex-row gap-2">
                    <li className="sm:bg-[#3d3fd8] sm:p-1 sm:rounded-md sm:text-white ">
                        <Link to="/signup">signup</Link>
                    </li>
                    <li className="sm:bg-[#3d3fd8] sm:p-1 sm:rounded-md sm:text-white ">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <button className="flex text-2xl sm:hidden cursor-pointer" onClick={(toggleMenu)} >
                {
                    menu ? <MdClose /> : <MdMenu />
                }
            </button>
        </div>
    )
}