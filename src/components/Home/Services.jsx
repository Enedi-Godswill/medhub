
export default function Services(){
    return(
        <div className="p-3 flex flex-col items-center justify-center">
            <h1 className="mb-5 font-bold text-4xl uppercase ">Our Services</h1>
            {/* services */}
            <ul className="flex justify-center flex-wrap gap-3 ">
                <li className="border-2 border-solid border-[#292929] p-2 rounded-md w-[13rem] flex flex-col justify-center items-center text-center gap-2 text-xs ">
                    <h2 className="font-bold capitalize text-2xl">comprehensive care</h2>
                    <p>Proper care with users health data to provide them the best service ever.</p>
                </li>
                <li className="border-2 border-solid border-[#292929] p-2 rounded-md w-[13rem] flex flex-col justify-center items-center text-center gap-2 text-xs ">
                    <h2 className="font-bold capitalize text-2xl">efficiency</h2>
                    <p>Experience high efficiency in how your data is handled and delivered to you in realtime.</p>
                </li>
                <li className="border-2 border-solid border-[#292929] p-2 rounded-md w-[13rem] flex flex-col justify-center items-center text-center gap-2 text-xs ">
                    <h2 className="font-bold capitalize text-2xl">professionality</h2>
                    <p>Professionality matters when health related data is being handled, and for that medhub offers that the most</p>
                </li>
                <li className="border-2 border-solid border-[#292929] p-2 rounded-md w-[13rem] flex flex-col justify-center items-center text-center gap-2 text-xs ">
                    <h2 className="font-bold capitalize text-2xl">experience</h2>
                    <p>handling health-related data is not only about having a platform of such, the experience is what makes the service worth it.</p>
                </li>
            </ul>

        </div>
    )
}
