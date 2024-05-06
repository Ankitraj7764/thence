import React from 'react'
import { BsFillRocketTakeoffFill } from "react-icons/bs";

function Hero() {
    return (
        <div className='mt-12'>

           <div className='flex justify-center mb-8'>
           <div className='w-[588px] h-[178px] flex flex-col justify-center '>
                <p className='font-[400] text-[28px] text-green-700 text-center ' style={{fontFamily:"Covered By Your Grace"}}>Success stories</p>
                <h3 className='font-[600] text-[56px] text-center'>Every success journey we’ve encountered.</h3>
            </div>
           </div>
            <div className='flex'>
                <div className=''>
                    <div className='flex'>
                        <div>
                            <div className='relative z-0 left-[140px] top-[100px] shadow-sm'>
                                <div className='flex flex-col bg-white h-[239px] w-[267px] p-4 rounded-xl'>
                                    <div>
                                        <p className='font-[500] text-[64px]'>40%</p>
                                    </div>
                                    <div>
                                        <p className='text-[#828282] font-[500] text-[18px]'>
                                            Achieved reduction in project execution time by optimising team availability
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white rounded-full z-1 relative left-[200px] h-16 w-72 top-[200px] flex justify-between px-6 shadow-sm'>
                                <div className=' rounded-full bg-slate-200 h-10 mt-3 w-10 '>
                                <BsFillRocketTakeoffFill className='text-[24px] mt-2 ml-2 text-[#2DA950]'/>

                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='text-[24px] font-[700]'>10 DAYS</h3>
                                    <p className='font-[500] text-[16px] text-[#828282]'>Staff Deployment</p>
                                </div>

                            </div>

                        </div>
                        <img src="./herog.png" alt="" className='w-[506px] h-[546px] z-1' />

                        <div className='w-[290px] h-[239px] bg-[#002E18] rounded-xl text-white relative z-1 top-[350px] right-[200px] p-8'>
                            <p className='font-[500] text-[40px] '>
                                $0.5 <span className='font-[500] text-[15px] text-[#CCCCCC]'>MILLION</span>
                            </p>
                            <p className='font-[500] text-[15px] mt-4 text-[#CCCCCC]'>
                                Reduced client expenses by saving on hiring and employee costs.
                            </p>
                        </div>
                    </div>


                </div>
                <div className='flex flex-col'>
                    <h5 className='font-[600] text-[36px] w-80 '>
                        Enhance fortune 50 company’s insights teams research capabilities
                    </h5>
                    <div className='flex mt-56'>
                        <button className='rounded-full bg-black text-white h-12 w-40'>
                            Explore More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero