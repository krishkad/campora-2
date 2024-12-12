"use client";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { BedSingleIcon, ClockIcon, CoffeeIcon, CupSodaIcon, DoorClosedIcon, FlameKindlingIcon, Gamepad, Music2Icon, SunIcon, TreesIcon, UtensilsCrossed } from "lucide-react";
import AnimatedTitle from "./animated-title";

const Day = () => {
    return (
        <div className="w-full">
            <div className="max-w-wrapper-6xl pt-16 pb-16">
                <h1 className="text-center text-4xl font-medium">
                    How Your Day
                    {" "}
                    <span className="px-2 text-primary">Looks</span>
                    {" "}
                    Like ?
                </h1>
                {/* <AnimatedTitle title="How Your Day <br /><span>Looks</span> Like ?" /> */}
                <div className="w-full mt-14">
                    <Tabs defaultValue="day-1" className="max-w-[400px] mx-auto">
                        <TabsList className="grid w-full grid-cols-2 rounded-full gap-1">
                            <TabsTrigger value="day-1" asChild className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white ">
                                <div className="w-full h-16 rounded-full border-none font-semibold cursor-pointer">
                                    Day 1
                                </div>
                            </TabsTrigger>
                            <TabsTrigger value="day-2" asChild className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white ">
                                <div className="w-full h-16 rounded-full border-none font-semibold cursor-pointer">
                                    Day 2
                                </div>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="day-1">
                            <Card  >
                                <CardHeader>
                                    <CardTitle>Day 1</CardTitle>

                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <ClockIcon className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">4:00 PM</span>
                                        </div>
                                        <p className="font-semibold">Check-In</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <CupSodaIcon className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">5:00 PM</span>
                                        </div>
                                        <p className="font-semibold">Welcome Drink & Snack Time</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <TreesIcon className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">5:30 PM</span>
                                        </div>
                                        <p className="font-semibold">Nature Trail</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Gamepad className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">6:00 PM</span>
                                        </div>
                                        <p className="font-semibold">Game Time</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Music2Icon className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">7:30 PM</span>
                                        </div>
                                        <p className="font-semibold">Music Hours</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <FlameKindlingIcon className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">8:00 PM</span>
                                        </div>
                                        <p className="font-semibold">Barbeque Bonanza</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <UtensilsCrossed className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">9:30 PM</span>
                                        </div>
                                        <p className="font-semibold">Dinner Delight </p>
                                    </div>
                                    <div className="space-y-2">
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

                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <SunIcon className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">7:00 AM</span>
                                        </div>
                                        <p className="font-semibold">Rise & Shine</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <CoffeeIcon className="w-5 h-5 shrink-0" />
                                            <span className="font-medium text-sm">9:00 AM</span>
                                        </div>
                                        <p className="font-semibold">Tea & Breakfast</p>
                                    </div>
                                    <div className="space-y-2">
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
    )
}

export default Day