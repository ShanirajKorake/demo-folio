import PortfolioHero from "../Components/PortfolioHero";
import LightRays from "../Components/LightRays";

export default function FolioHome() {
    return (
        <>
            <div className="w-full h-screen relative">
                <LightRays
                    raysOrigin="bottom-center"
                    raysColor="#66b6d1"
                    mouseInfluence={0.5}
                    className="custom-rays"
                />
            </div>
            <PortfolioHero />

        </>
    );
}