"use client";
import Image from 'next/image';
import AnimatedTitle from './animated-title';

const About = () => {


    return (
        <div className="w-full h-max mt-32">
            <div className="max-w-wrapper flex flex-col items-center">
                {/* <h1 className="text-4xl font-medium text-balance pl-5 md:pl-8 text-center" id='about-title'>
                    Welcome to <span className="px-2 text-primary">Campora</span>
                </h1> */}
                <AnimatedTitle title='Welcome to <br /><span>Campora</span>' />
                <p className="text-base font-medium text-center mt-7 max-w-xl">
                    Looking for a getaway in nature? Campora is the perfect spot to relax, explore, and have fun. With cozy accommodations, exciting activities, and amazing views, we&apos;ve got everything you need for a great time outdoors. Come join us and make some awesome memories! 🌲✨
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-8">
                <div className="relative w-full aspect-square">
                    <Image
                        src={'/images/discover/camping-2.jpg'}
                        loading="eager"
                        priority
                        fill
                        sizes="100%"
                        style={{
                            objectFit: "cover"
                        }}
                        className="object-cover"
                        alt="showcase"
                    />
                    <div className="absolute inset-0 bg-black opacity-10" />
                    <p className="absolute bottom-10 left-4 text-base font-semibold text-white">Camping</p>
                    <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Cozy Stays Amidst Nature</p>
                </div>
                <div className="relative w-full aspect-square">
                    <Image
                        src={'/images/discover/cone-cottage-2.jpg'}
                        loading="eager"
                        priority
                        fill sizes="100%"
                        style={{ objectFit: "cover" }}
                        className="object-cover"
                        alt="showcase"
                    />

                    <div className="absolute inset-0 bg-black opacity-10" />
                    <p className="absolute bottom-10 left-4 text-base font-semibold text-white">
                        Cottage
                    </p>
                    <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Charming Cottages in Nature</p>
                </div>
                <div className="relative w-full aspect-square">
                    <Image
                        src={'/images/discover/view.jpg'}
                        loading="eager"
                        priority
                        fill
                        sizes="100%"
                        style={{ objectFit: "cover" }}
                        className="object-cover"
                        alt="showcase"
                    />
                    <div className="absolute inset-0 bg-black opacity-10" />

                    <p className="absolute bottom-10 left-4 text-base font-semibold text-white">
                        Lake View
                    </p>
                    <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Serene Grounds for Relaxation</p>
                </div>
            </div>
        </div>
    )
}

export default About