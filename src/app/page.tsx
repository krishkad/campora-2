import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import { AirVent, Armchair, ArrowLeft, ArrowRight, BabyIcon, Bed, BedSingleIcon, ClockIcon, CoffeeIcon, CookingPot, CupSodaIcon, DoorClosedIcon, FlameKindling, FlameKindlingIcon, Gamepad, Music2Icon, PartyPopper, PencilRuler, QuoteIcon, SoupIcon, Star, StarIcon, SunIcon, TelescopeIcon, Tent, TreesIcon, UtensilsCrossed, Wifi } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full h-max mt-32">
        <div className="max-w-wrapper flex flex-col items-center">
          <h1 className="text-4xl font-medium text-balance pl-5 md:pl-8 text-center">
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
        <div className="max-w-wrapper-6xl mt-32">
          <h1 className="text-4xl font-medium text-center">
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
              <div className="w-full">
                <p className="text-sm"><PencilRuler className="inline mr-2 w-4 h-4" />8x8 ft tent for 2 adults</p>
                <p className="text-sm"><Bed className="inline mr-2 w-4 h-4" />Includes sleeping bags and pads</p>
                <p className="text-sm"><Armchair className="inline mr-2 w-4 h-4" />Chairs, table, lantern, fire pit</p>
                <p className="text-sm"><Star className="inline mr-2 w-4 h-4" />Lakefront, pre-pitched</p>
              </div>
              <Button className="min-w-[240px]">Check Availibility</Button>
            </div>

            <div className="w-full h-max space-y-3">
              <div className="relative w-full aspect-video">
                <Image src={'/images/cabin/cabin-1.jpg'} fill priority className="size-full object-cover rounded-md" alt="images" />
              </div>
              <h2 className="text-xl font-semibold">
                Cottage Stay
              </h2>
              <div className="w-full">
                <p className="text-sm"><PencilRuler className="inline mr-2 w-4 h-4" />20x15 ft cottage for 4</p>
                <p className="text-sm"><Bed className="inline mr-2 w-4 h-4" /> 1 queen bed, 1 sofa bed</p>
                <p className="text-sm"><AirVent className="inline mr-2 w-4 h-4" />Kitchenette, bathroom, AC</p>
                <p className="text-sm"><Star className="inline mr-2 w-4 h-4" />Lakefront with private patio</p>
              </div>
              <Button className="min-w-[240px]">Check Availibility</Button>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-wrapper-6xl mt-32">
          <h1 className="text-center text-4xl font-medium">
            Everything You Need for a <br className="hidden md:block" />
            {' '}
            <span className="px-2 bg-primary text-white">Memorable</span>
            {' '}
            Stay
          </h1>
          <div className="w-full">
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5 mt-16">
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>
              <div className="w-full space-y-3 aspect-square border rounded-md flex flex-col items-center justify-center">
                <Wifi className="w-12 h-12 shrink-0 mx-auto" />
                <p className="font-medium text-sm text-center">High Speed WiFi</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-24">
          <h1 className="text-center text-4xl font-medium">
            Choosing Us Means
            {" "}
            <span className="px-2 bg-primary text-white">Choosing Memories</span>
            {" "}
            <br className="hidden md:block" />That Last a Lifetime
          </h1>
          <div className="w-full mt-14">

          </div>
        </div>
      </div>


      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-24">
          <h1 className="text-center text-4xl font-medium">
            How Your Day
            {" "}
            <span className="px-2 bg-primary text-white">Looks</span>
            {" "}
            Like ?
          </h1>
          <div className="w-full mt-14">
            <Tabs defaultValue="day-1" className="max-w-[400px] mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="day-1">Day 1</TabsTrigger>
                <TabsTrigger value="day-2">Day 2</TabsTrigger>
              </TabsList>
              <TabsContent value="day-1" >
                <Card  >
                  <CardHeader>
                    <CardTitle>Day 1</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">4:00 PM</span>
                      </div>
                      <p className="font-semibold">Check-In</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CupSodaIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">5:00 PM</span>
                      </div>
                      <p className="font-semibold">Welcome Drink & Snack Time</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TreesIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">5:30 PM</span>
                      </div>
                      <p className="font-semibold">Nature Trail</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Gamepad className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">6:00 PM</span>
                      </div>
                      <p className="font-semibold">Game Time</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Music2Icon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">7:30 PM</span>
                      </div>
                      <p className="font-semibold">Music Hours</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <FlameKindlingIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">8:00 PM</span>
                      </div>
                      <p className="font-semibold">Barbeque Bonanza</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <UtensilsCrossed className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">9:30 PM</span>
                      </div>
                      <p className="font-semibold">Dinner Delight </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <BedSingleIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">11:00 PM</span>
                      </div>
                      <p className="font-semibold">Tent Time</p>
                    </div>

                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="day-2" >
                <Card  >
                  <CardHeader>
                    <CardTitle>Day 2</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <SunIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">7:00 AM</span>
                      </div>
                      <p className="font-semibold">Rise & Shine</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CoffeeIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">9:00 AM</span>
                      </div>
                      <p className="font-semibold">Tea & Breakfast</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <DoorClosedIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">11:00 AM</span>
                      </div>
                      <p className="font-semibold">Check-Out</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-24">
          <h1 className="text-center text-4xl font-medium">
            Snapshots of
            {" "}
            <span className="px-2 bg-primary text-white">Adventure</span>
            {" "}
          </h1>
          <div className="w-full mt-14">

          </div>
        </div>
      </div>



      <div className="w-full">
        <div className="max-w-wrapper-6xl mt-32">
          <h1 className="text-center text-4xl font-medium">
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
                  <div className="space-y">
                    <p className="font-semibold">John James</p>
                    <div className="flex items-center justify-start gap-2">
                      <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                      <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                      <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                      <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                      <StarIcon className="w-3 h-3 shrink-0 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
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
          <h1 className="text-center text-4xl font-medium">
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
