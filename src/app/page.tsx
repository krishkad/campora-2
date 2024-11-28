import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CookingPot, FlameKindling, PartyPopper, QuoteIcon, Tent } from "lucide-react";
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

      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-24">
          <h1 className="text-4xl font-semibold text-center">
            Find Your <span className="px-2 bg-primary text-white">Perfect</span> Stay
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="w-full h-max space-y-3">
              <div className="relative w-full aspect-video">
                <Image src={'/images/rooms/camping-2.jpg'} fill priority className="size-full object-cover rounded-md" alt="images" />
              </div>
              <h2 className="text-xl font-semibold">
                Camping Tent
              </h2>
              <p className="text-sm">
                Experience serene lakeside camping like never before! Nestled by the tranquil waters, our premium tents offer unmatched comfort, breathtaking views, and a perfect escape to nature's embrace. Relax, unwind, and reconnect under the stars!
              </p>
              <Button className="min-w-[240px]">Check Availibility</Button>
            </div>

            <div className="w-full h-max space-y-3">
              <div className="relative w-full aspect-video">
                <Image src={'/images/cabin/cabin-1.jpg'} fill priority className="size-full object-cover rounded-md" alt="images" />
              </div>
              <h2 className="text-xl font-semibold">
                Cottage Stay
              </h2>
              <p className="text-sm">
                Stay in a cozy lakeside cottage and enjoy the perfect getaway! Wake up to peaceful water views, relax in comfort, and make the most of your time in nature. It&apos;s the ultimate spot to unwind and recharge.
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
      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-24">
          <h1 className="text-center text-4xl font-semibold">
            What Our
            {' '}
            <span className="px-2 bg-primary text-white">Guests</span>
            {' '}
            Are Saying
          </h1>
          <div className="w-full mt-14">
            <div className="w-[90%] sm:w-[70%] mx-auto">
              <div className="w-full">

                <div className="w-full flex items-center gap-4">
                  <div className="relative w-12 aspect-square">
                    <Image src={'/images/users/user-1.png'} className="object-cover rounded-full" fill priority alt="user-image" />
                  </div>
                  <p className="font-semibold">John James</p>
                </div>
                <div className="relative w-full mt-5">
                  <QuoteIcon className="w-6 h-6 shrink-0 scale-x-[-1]" />
                  <p className="font-medium pl-10">
                    I had an amazing stay at this lakeside camping resort! The views were absolutely breathtaking, and the peaceful vibe made it so relaxing. The tents were super comfortable, and I loved waking up to the sound of the water. The staff was friendly and made sure everything was perfect. Can&apos;t wait to come back for another escape into nature!

                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <Button size={'icon'} variant={'outline'} className="rounded-full">
                  <ArrowLeft />
                </Button>
                <Button size={'icon'} variant={'outline'} className="rounded-full">
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-24">
          <h1 className="text-center text-4xl font-semibold">
            Ready to
            {' '}
            <span className="px-2 bg-primary text-white">Plan</span>
            {' '}
            Your <br className="hidden sm:block" /> Stay?
          </h1>
          <div className="w-full mt-14">

          </div>
        </div>
      </div>
    </div>
  );
}
