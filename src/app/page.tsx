import Hero from "@/components/shared/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full h-screen mt-32">
        <h1 className="text-4xl font-semibold text-balance pl-5 md:pl-8">
          Stay in cottages and scenic camps
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-8">
          <div className="relative w-full aspect-square">
            <Image src={'/images/discover/camping-2.jpg'} unoptimized priority width={0} height={0} className="w-full h-full object-cover" alt="showcase" />
            <div className="absolute inset-0 bg-black opacity-10" />
            <p className="absolute bottom-10 left-4 text-base font-semibold text-white">Camping</p>
            <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Cozy Stays Amidst Nature</p>
          </div>
          <div className="relative w-full aspect-square">
            <Image src={'/images/discover/cone-cottage-2.jpg'} unoptimized priority width={0} height={0} className="w-full h-full object-cover" alt="showcase" />
            <div className="absolute inset-0 bg-black opacity-10" />
            <p className="absolute bottom-10 left-4 text-base font-semibold text-white">
              Cottage
            </p>
            <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Charming Cottages in Nature</p>
          </div>
          <div className="relative w-full aspect-square">
            <Image src={'/images/discover/ground-2.jpg'} unoptimized priority width={0} height={0} className="w-full h-full object-cover" alt="showcase" />
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
