import Hero from "@/components/shared/hero";
import { CookingPot, FlameKindling, PartyPopper, Tent } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full h-max mt-32">
        <div className="max-w-wrapper flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-balance pl-5 md:pl-8 text-center">
            Welcome to <span className="px-2 text-white bg-primary">Campora</span>
          </h1>
          <p className="text-base font-medium text-center mt-7 max-w-xl">
            Looking for a getaway in nature? Campora is the perfect spot to relax, explore, and have fun. With cozy accommodations, exciting activities, and amazing views, we’ve got everything you need for a great time outdoors. Come join us and make some awesome memories! 🌲✨
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-8">
          <div className="relative w-full aspect-square">
            <Image src={'/images/discover/camping-2.jpg'} loading="eager" unoptimized priority width={0} height={0} className="w-full h-full object-cover" alt="showcase" />
            <div className="absolute inset-0 bg-black opacity-10" />
            <p className="absolute bottom-10 left-4 text-base font-semibold text-white">Camping</p>
            <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Cozy Stays Amidst Nature</p>
          </div>
          <div className="relative w-full aspect-square">
            <Image src={'/images/discover/cone-cottage-2.jpg'} loading="eager" unoptimized priority width={0} height={0} className="w-full h-full object-cover" alt="showcase" />
            <div className="absolute inset-0 bg-black opacity-10" />
            <p className="absolute bottom-10 left-4 text-base font-semibold text-white">
              Cottage
            </p>
            <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Charming Cottages in Nature</p>
          </div>
          <div className="relative w-full aspect-square">
            <Image src={'/images/discover/ground-2.jpg'} loading="eager" unoptimized priority width={0} height={0} className="w-full h-full object-cover" alt="showcase" />
            <div className="absolute inset-0 bg-black opacity-10" />

            <p className="absolute bottom-10 left-4 text-base font-semibold text-white">
              Garden/Ground
            </p>
            <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Serene Grounds for Relaxation</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}
