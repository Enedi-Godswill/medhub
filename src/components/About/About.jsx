
import Navbar from "../Navbar";
import barChart from "../assets/bar-chart.jpg"
import { Link } from "react-router-dom";

export default function About(){
    return(
        <div>
            <Navbar />

            {/* div top part */}
            <div className="w-full h-[40vh] flex flex-col justify-center items-center gap-2 bg-cover bg-no-repeat bg-center bg-fixed " style={{backgroundImage:`url(${barChart})` }} >
                <h1 className="font-bold text-4xl">About Us</h1>
                <div className="flex items-center gap-3">
                    <p>
                        <Link to="/">Home</Link>
                    </p> /
                    <p>About Us</p>
                </div>

            </div>

            {/* about information */}
            <div>
                
            </div>

        </div>
    )
}
