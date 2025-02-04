
import { Link } from "react-router-dom"
import coolImg from "../assets/corporate.jpg"
import coolImg2 from "../assets/student.jpg"

export default function AboutInfo(){
    return(
        <div>
            {/* About Info 1 */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 p-3 mt-5">
                <div className="w-full sm:w-[50%] flex flex-col gap-2">
                    <h1 className="text-2xl font-bold uppercase">Your gateway to a healthy life</h1>
                    <p>Medhub allows users to easily analyse their health challenges through the use of proper analysis system. This system gives users the means to categorize their health issues and work on solving them properly.</p>
                    <button className="bg-white text-black p-1 rounded-md font-semibold w-[5rem] ">
                        <Link to="/signup">Join Us</Link>
                    </button>
                </div>
                <div className="w-[60%] sm:w-[50%] ">
                    <img src={coolImg} className="rounded-3xl " alt="" />
                </div>
            </div>

            {/* About Info 2 */}
            <div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-3 p-3 mt-5">
                <div className="w-full sm:w-[50%] flex flex-col gap-2">
                    <h1 className="text-2xl font-bold uppercase">Careful Health Analysis</h1>
                    <p>The health analysis system is viable for proper analysis and gives users time to assess themselves. Out system is user friendly and caters to personal use, enabling proper understanding and easy user interface and user experience. </p>
                    <button className="bg-white text-black p-1 rounded-md font-semibold w-[5rem] ">
                        <Link to="/signup">Join Us</Link>
                    </button>
                </div>
                <div className="w-[60%] sm:w-[50%] ">
                    <img src={coolImg2} className="rounded-3xl " alt="" />
                </div>
            </div>

        </div>
    )
}