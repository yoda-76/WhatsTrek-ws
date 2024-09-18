    import React from 'react'
    import p1 from '../assets/p1.png'
    import p2 from '../assets/p2.png'
    import p3 from '../assets/p3.png'
    import p1h from '../assets/p1h.png'
    import p2h from '../assets/p2h.png'
    import p3h from '../assets/p3h.png'
    
    export default function Pricing() {
      return (
        <div className=" flex flex-col items-center my-20">
            <div className="w-[70%]">
                <div className="text-5xl text-black my-5">Pricing</div>
                <div className="text-2xl text-black ">
                Unleash the power of hassle-free messaging and make your chat life more fun, efficient, and totally effortless. We’re here {" "}
                </div>
            </div>


            <div className="flex justify-center items-center mt-32 mx-20 ">
            <div className="flex  justify-start items-start w-[80%]">
                <img className="w-1/3" src={p1} alt="logo" />
                <img className="w-1/3" src={p2} alt="logo" />
                <img className="w-1/3" src={p3} alt="logo" />
                </div>
                
                
            </div>
        </div>
      )
    }
    