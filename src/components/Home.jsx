import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

function Home() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate('/');
        }, countdown * 1000);

        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
            clearTimeout(redirectTimer);
            clearInterval(interval);
        };
    }, [countdown, navigate]);

    return (
        <div>
            <div>
                <div className='flex justify-between mx-12 mt-4'>
                    <div>
                        <img src='./logo.png' alt="" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center align-middle items-center mt-24'>
                <div className='flex flex-col justify-center w-[718px] h-[357px]'>
                    <div className='flex justify-center'>
                        <div className='bg-green-700 rounded-full text-white w-16 flex justify-center'>
                            <TiTick className='text-[60px]' />
                        </div>
                    </div>
                    <div>
                        <p className='font-[400] text-[28px] text-green-700 text-center' style={{ fontFamily: "Covered By Your Grace" }}>Success Submitted</p>
                    </div>
                    <div>
                        <p className='text-[56px] font-[600] text-center'>Congratulations</p>
                    </div>
                    <div>
                        <p className='text-[27px] font-[500] text-[#727272]'>
                            Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <p>Redirecting you to Homepage in {countdown} Seconds</p>
            </div>
        </div>
    )
}

export default Home;
