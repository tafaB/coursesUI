import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import ScrollMore from '../icons/scroll-more.svg';

export default function WelcomeAd({img, title, subTitle}) {
    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[ { image: img, speed: -15,}, ]}
            >
                <div className="absolute p-4 inset-0 flex flex-col items-end justify-end bg-gradient-to-l from-black to-transparent"></div>
                <div className="hero min-h-screen justify-end items-center relative">
                    <div className="hero-content text-white text-right">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">
                                {subTitle}
                            </p>
                            <button class="btn glass text-white hover:text-black mr-5">Regjistrohuni si Student</button>
                            <button class="btn glass text-white hover:text-black">Regjistrohuni si Mësues</button>
                        </div>
                    </div>
                </div>
                <img
                    src={ScrollMore}
                    alt="scroll-more"
                    onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight * 0.5, behavior: 'smooth' })}
                    className="w-8 h-8 animate-bounce absolute bottom-4 left-1/2 transform -translate-x-1/2"
                />
            </ParallaxBanner>
        </ParallaxProvider>
    );
}
