
export default function Footer(){
    return(
        <div className="flex flex-col justify-center items-center gap-3 p-3 font-semibold bg-gradient-to-r bg-blue-500 text-white text-xs">
            <h1 className="text-2xl mt-3 uppercase">medhub</h1>
            <ul className="flex justify-center items-center gap-3 capitalize">
                <li>
                    <p>Contact us</p>
                </li>
                <li>
                    <p>about us</p>
                </li>
                <li>
                    <a href="#">our services</a>
                </li>
                <li>
                    <p>team</p>
                </li>
                <li>
                    <p>FAQs</p>
                </li>
            </ul>
            <hr className="w-[90%] bg-white h-[5px] rounded " />
            <h2 className="mb-4">@Copyright of Amadi Favour</h2>
        </div>
    )
}