import React, { useState } from 'react';

function Rform() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [err, setErr] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const isFormValid = name !== '' && email !== '';

    const checkMsg = () => {
        if (email.includes('@') && email.includes('gmail')) {
            setErr('');
        } else {
            setErr('Enter a valid email address');
        }
    };



    return (
        <div className='bg-white h-[100vh]'>
            <div>
                <div>
                    <div className='flex justify-between mx-12 mt-4'>
                        <div>
                            <img src='./logo.png' alt="" />
                        </div>
                        <div >
                           <a href="/">X</a>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center align-middle items-center mt-24'>
                    <div className='flex flex-col justify-center w-[618px] h-[357px]'>
                        <div>
                            <p className='font-[400] text-[28px] text-green-700 text-center' style={{ fontFamily: "Covered By Your Grace" }}>Registration Form</p>
                        </div>
                        <div>
                            <p className='text-[56px] font-[600] text-center'>Start your success Journey here!</p>
                        </div>
                        <div className='w-[618px]'>
                            <form onSubmit={handleSubmit} className='flex flex-col'>
                                <input type="text" className='my-4 rounded-full bg-[#EFEFEF] border border-slate-200 h-[65px] w-[618px] px-12' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                                <input
                                    type="text"
                                    className='my-4 rounded-full bg-[#EFEFEF] border border-slate-200 h-[65px] w-[618px] px-12'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        checkMsg();
                                    }}
                                />

                              <p className='text-[#FF0808] ml-4'>

                              {err}
                              </p>
                                <div className='flex justify-center'>
                                    <button disabled={!isFormValid} type="submit" className={`rounded-full ${isFormValid ? 'bg-black text-white' : 'bg-gray-400'} px-6 mt-6 h-[57px] w-[350px]`}>
                                       <a href="/home">
                                       Submit
                                       </a>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rform;
