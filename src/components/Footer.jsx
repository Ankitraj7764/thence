import React, { useState } from 'react';

function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSlider = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='flex justify-between flex-col'>
            <div className='flex justify-center mt-32 '>

                <div className='flex justify-between w-[80vw] bg-[#E8EEE7] rounded-xl p-12'>
                    <div className='flex flex-col'>
                        <p className='text-[#9E9D9D] font-[400] text-[32px]' style={{ fontFamily: "Covered By Your Grace" }}>What’s on your mind</p>
                        <h4 className='font-[600] text-[60px]'>Ask Questions</h4>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between my-4 w-[25vw]'>
                            <p className='font-[600] text-[20px]'>Do you offer freelancers?</p>
                            <p className='text-[22px]' onClick={toggleSlider}>+</p>
                        </div>
                        {isOpen && (
                            <div className='border-t border-gray-300 pt-4'>
                                <p>Demo text for the first question.</p>
                            </div>
                        )}

                        <div className='flex justify-between my-4  w-[25vw]'>
                            <p className='font-[600] text-[20px]'>Do you offer freelancers?</p>
                            <p className='text-[22px]' onClick={toggleSlider}>+</p>
                        </div>
                        {isOpen && (
                            <div className='border-t border-gray-300 pt-4'>
                                <p>Demo text for the second question.</p>
                            </div>
                        )}

                        <div className='flex justify-between my-4  w-[25vw]'>
                            <p className='font-[600] text-[20px]'>Do you offer freelancers?</p>
                            <p className='text-[22px]' onClick={toggleSlider}>+</p>
                        </div>
                        {isOpen && (
                            <div className='border-t border-gray-300 pt-4'>
                                <p>Demo text for the first question.</p>
                            </div>
                        )}

                        <div className='flex justify-between my-4  w-[25vw]'>
                            <p className='font-[600] text-[20px]'>Do you offer freelancers?</p>
                            <p className='text-[22px]' onClick={toggleSlider}>+</p>
                        </div>
                        {isOpen && (
                            <div className='border-t border-gray-300 pt-4'>
                                <p>Demo text for the second question.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>



            <div className='flex justify-center my-16  h-24'>
                <div className='flex justify-between  rounded-xl w-[80vw] bg-[#F5F5F5] p-4 pt-8'>
                    <div>
                        Talup 2023. All rights reserved
                    </div>
                    <div className='flex'>
                        <div>Terms & Conditions</div>
                        <div>Privacy Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer