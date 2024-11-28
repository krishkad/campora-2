import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
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
              src={'/images/discover/ground-2.jpg'}
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
              Garden/Ground
            </p>
            <p className="absolute bottom-4 left-4 text-sm font-medium text-gray-300">Serene Grounds for Relaxation</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-24">
          <h1 className="text-4xl font-semibold text-center">
            Find Your <span className="px-2 bg-primary text-white">Perfect</span> Stay
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="w-full h-max space-y-3">
              <div className="relative w-full aspect-[4/3]">
                <Image src={'/images/rooms/camping-2.jpg'} fill priority className="size-full object-cover" alt="images" />
              </div>
              <h2 className="text-xl font-semibold">
                Camping tent
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem voluptas excepturi natus distinctio inventore ipsum, officiis unde deleniti voluptatum quis, sit exercitationem nesciunt minima!
              </p>
              <Button className="min-w-[240px]">Check Availibility</Button>
            </div>
            <div className="w-full h-max space-y-3">
              <div className="relative w-full aspect-[4/3]">
                <Image src={'/images/rooms/camping-4.jpg'} fill priority className="size-full object-cover" alt="images" />
              </div>
              <h2 className="text-xl font-semibold">
                Camping tent
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem voluptas excepturi natus distinctio inventore ipsum, officiis unde deleniti voluptatum quis, sit exercitationem nesciunt minima!
              </p>
              <Button className="min-w-[240px]">Check Availibility</Button>
            </div>
            <div className="w-full h-max space-y-3">
              <div className="relative w-full aspect-[4/3]">
                <Image src={'/images/cabin/cabin-1.jpg'} fill priority className="size-full object-cover" alt="images" />
              </div>
              <h2 className="text-xl font-semibold">
                Camping tent
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem voluptas excepturi natus distinctio inventore ipsum, officiis unde deleniti voluptatum quis, sit exercitationem nesciunt minima!
              </p>
              <Button className="min-w-[240px]">Check Availibility</Button>
            </div>
            <div className="w-full h-max space-y-3">
              <div className="relative w-full aspect-[4/3]">
                <Image src={'/images/cabin/cabin-2.jpg'} fill priority className="size-full object-cover" alt="images" />
              </div>
              <h2 className="text-xl font-semibold">
                Camping tent
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem voluptas excepturi natus distinctio inventore ipsum, officiis unde deleniti voluptatum quis, sit exercitationem nesciunt minima!
              </p>
              <Button className="min-w-[240px]">Check Availibility</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-24">
          <h1 className="text-center text-4xl font-semibold">
            Everything You Need for a <br className="hidden md:block" />
            {' '}
            <span className="px-2 bg-primary text-white">Memorable</span>
            {' '}
            Stay
          </h1>
        </div>
      </div>
    </div>
  );
}
