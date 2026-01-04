import React, { useState, useEffect } from 'react'
import icon from '../assets/ico.jpeg'


const VerificationAtOikas = ({ onVerificationComplete }) => {
    const [code, setCode] = useState('')
    const [isVerified, setIsVerified] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const verified = sessionStorage.getItem('oikas_verified')
        if (verified === 'true') {
            setIsVerified(true)
            if (onVerificationComplete) onVerificationComplete() // Auto-trigger if already verified
        }
    }, [])

    const handleVerification = () => {
        if (code === 'Oikas5664') {
            sessionStorage.setItem('oikas_verified', 'true')
            setIsVerified(true)
            setError(false)
            if (onVerificationComplete) {
                onVerificationComplete()
            }
        } else {
            setError(true)
            setTimeout(() => setError(false), 2000)
        }
    }

    if (isVerified) return null;

    return (
        <div className='h-screen flex flex-col w-screen text-white bg-gray-950 geom'>
            <div className='flex-none flex flex-row justify-center items-center text-2xl py-3 e-o-r gap-2'>
                <h1>
                    SHANI
                </h1>
            </div>

            <div className='flex-1 flex flex-row justify-center items-center pb-40 md:pb-20'>

                <div className='flex flex-col gap-2 px-10'>
                    <h1>
                        Did I shared this link with you?
                    </h1>
                    <h1>
                        if yes, I must have shared a verification code with it. please enter it below.
                    </h1>
                    <div className='flex flex-col rounded-2xl border border-gray-600 overflow-clip my-3 transition-all duration-300'>
                        <input
                            type="text"
                            className='px-4 py-2 text-center'
                            placeholder='Enter verification code'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleVerification()
                                }
                            }}
                        />
                        <button
                            className='bg-blue-500 px-4 py-2'
                            onClick={handleVerification}>
                            verify
                        </button>
                    </div>
                    {error && <p className='text-red-500 w-full text-center'>Invalid code</p>}
                    <p className='text-sm text-gray-600'>
                        if No, either you are not suposed to be here.
                    </p>
                    <p className='text-sm text-gray-600'>
                        Or just contact me.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default VerificationAtOikas