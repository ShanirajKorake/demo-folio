import React from 'react'
import CircularGallery from '../Components/CircularGallery'
import DarkVeil from '../Components/DarkViel'
import sunflowerImg from '../assets/sunflower1.jpg'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sunflower = () => {
    const galleryItems = Array(12).fill(null).map((_, i) => {
        const words = ['Bloom', 'Radiance', 'Growth', 'Warmth', 'Sunlight', 'Golden', 'Energy', 'Vibrant', 'Petal', 'Nature', 'Summer', 'Seeker'];
        return { image: sunflowerImg, text: words[i] };
    });

    return (
        <>
        <div className='h-screen w-full bg-black md:hidden'>
            <div className="absolute inset-0 z-0">
                <DarkVeil
                    hueShift={70} // Slightly yellow/warm hue shift
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.5}
                    scanlineFrequency={100}
                    warpAmount={0}
                    resolutionScale={1}
                />
            </div>
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none w-full max-w-4xl px-4 ">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-lg opacity-90 filter blur-[0.3px]" style={{ fontFamily: 'serif' }}>
                    Sunflower
                </h1>
                <div className='w-full h-full object-cover rounded-2xl'>
                    <img src={sunflowerImg} alt="sunflower" className='w-full h-full object-cover rounded-4xl' />
                </div>
                <p className="mt-4 text-yellow-100/60 tracking-[0.3em] uppercase text-xs md:text-sm font-light">
                    Not just a flower
                </p>
                <p className='text-yellow-100/10 tracking-[0.3em] uppercase text-xs md:text-sm font-light mt-4'>for better view, use desktop</p>
            </div>
        </div>
        <div className="hidden md:block relative min-h-[60vh] md:min-h-screen w-full overflow-hidden bg-[#0a0a05] text-white">
            {/* Background DarkVeil */}
            <div className="absolute inset-0 z-0">
                <DarkVeil
                    hueShift={70} // Slightly yellow/warm hue shift
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.5}
                    scanlineFrequency={100}
                    warpAmount={0}
                    resolutionScale={1.5}
                />
            </div>

            {/* Dark overlay to make foreground pop */}
            <div className="absolute inset-0 z-5 bg-linear-to-b from-[#1a1a05]/80 via-transparent to-[#0a0a05] pointer-events-none" />


            {/* Center Header */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none w-full max-w-4xl px-4">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-lg opacity-90 filter blur-[0.3px]" style={{ fontFamily: 'serif' }}>
                    Sunflower
                </h1>
                <p className="mt-4 text-yellow-100/60 tracking-[0.3em] uppercase text-xs md:text-sm font-light">
                    Not just a flower
                </p>
            </div>

            {/* Circular Gallery */}
            <div className="w-full h-screen absolute inset-0 z-10 flex items-center justify-baseline pt-50 ">
                <div className="w-full h-[60vh] md:h-[70vh] cursor-grab active:cursor-grabbing">
                    <CircularGallery
                        items={galleryItems}
                        bend={3.5}
                        textColor="#ffffff"
                        borderRadius={0.08}
                        font="bold 45px sans-serif"
                        scrollSpeed={2}
                    />
                </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-yellow-500/10 blur-[150px] -z-1 rounded-full pointer-events-none" />
        </div>
        </>
    )
}

export default Sunflower