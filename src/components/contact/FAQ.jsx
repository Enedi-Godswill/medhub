
import { useState } from "react"
import { FAQS } from "../data/FAQ.js"

export default function FAQ(){

    const [answer, setAnswer] = useState();

    function toggleBtn(getCurrentId) {
        console.log(getCurrentId)
        setAnswer(getCurrentId === answer ? null : getCurrentId )
    }

    return(
        <div className="flex flex-col justify-center items-center p-3 gap-3">
                <h1 className="font-bold text-3xl uppercase text-center">frequently asked questions</h1>
                <div className="border-2 border-solid border-[#1d1d1d] rounded-md ">
                    {
                        FAQS && FAQS.length > 0 ?
                        FAQS.map((item) => {
                            return(
                                <div key={item.id} className="flex flex-col justify-between p-3 border-b-2 border-[#1d1d1d] w-[25rem] ">
                                    <div className="flex justify-between items-center">
                                        <h3>{item.question}</h3>
                                        <button onClick={() => toggleBtn(item.id)} className="cursor-pointer" >+</button>
                                    </div>
                                    {
                                        answer === item.id ?
                                        <p>{item.answer}</p>
                                        : null
                                    }
                                </div>
                            )
                        })
                        : <div>No data found</div>
                    }
                </div>
        </div>
    )
}