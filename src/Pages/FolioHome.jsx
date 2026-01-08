import PortfolioHero from "../Components/PortfolioHero";
import LightRays from "../Components/LightRays";
import FolioInfo from "../Components/FolioInfo";
import GradualBlur from "../Components/GradualBlur";
export default function FolioHome() {
    return (
        <>
            <div className="w-full h-screen relative bg-zinc-950">
                <LightRays
                    raysOrigin="bottom-center"
                    raysColor="#66b6d1"
                    mouseInfluence={0.5}
                    className="custom-rays hidden md:block"
                />
                <LightRays
                    raysOrigin="bottom-center"
                    raysColor="#66b6d1"
                    mouseInfluence={0.5}
                    className="custom-rays md:hidden"
                    rayLength={3}
                />
                <div className="absolute top-0 left-0 w-full h-screen flex flex-col-reverse md:flex-row bg-zinc-950 overflow-hidden">
                    <div className="flex-1 flex justify-center items-center z-10 text-white relative overflow-hidden h-full">
                        <FolioInfo />
                        <GradualBlur
                            target="parent"
                            position="bottom"
                            height="6rem"
                            strength={2}
                            divCount={5}
                            curve="bezier"
                            exponential={true}
                            opacity={1}
                        />
                    </div>
                    <div className="flex-1 relative h-full">

                        <PortfolioHero />
                    </div>
                </div>

            </div>

        </>
    );
}