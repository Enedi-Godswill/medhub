
export default function Services(){
    return(
        <div className="p-3">
            {/* services */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 ">
                <li className="flex flex-col justify-center items-center text-center gap-2 text-xs p-2 rounded-md ">
                    <h2 className="font-bold capitalize text-2xl">comprehensive care</h2>
                    <p>Proper care with users health data to provide them the best service ever.</p>
                </li>
                <li className="flex flex-col justify-center items-center text-center gap-2 text-xs border-solid rounded-md ">
                    <h2 className="font-bold capitalize text-2xl">efficiency</h2>
                    <p>Experience high efficiency in how your data is handled and delivered to you in realtime.</p>
                </li>
                <li className="flex flex-col justify-center items-center text-center gap-2 text-xs p-2 rounded-md ">
                    <h2 className="font-bold capitalize text-2xl">professionality</h2>
                    <p>Professionality matters when health related data is being handled, and for that medhub offers that the most</p>
                </li>
                <li className="flex flex-col justify-center items-center text-center gap-2 text-xs p-2 rounded-md ">
                    <h2 className="font-bold capitalize text-2xl">experience</h2>
                    <p>handling health-related data is not only about having a platform of such, the experience is what makes the service worth it.</p>
                </li>
            </ul>

        </div>
    )
}
