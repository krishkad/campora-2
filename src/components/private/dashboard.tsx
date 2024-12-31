import React from 'react';
import {
    BoxIcon,
    IndianRupeeIcon,
    SquareCheckIcon,
    WalletIcon
} from 'lucide-react';
import PieChartComponent from './pie-chart';
import BarChartComponent from './bar-chart';
import LineChartComponent from './line-chart';
import { MdFreeCancellation, MdOutlineCancel } from 'react-icons/md';
import RadialChartComponent from './radial-chart';
import LatestReservations from './latest-reservation';

const Dashboard = () => {
    return (
        <div className=' max-w-7xl mx-auto rounded-md'>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 grid-rows-8 md:grid-rows-2 gap-3">
                <div className="relative w-full aspect-[16/6] md:aspect-[16/8]  rounded-xl bg-white shadow-md border p-3 flex flex-col items-start justify-between max-md:order-1" >
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold truncate ">Total Bookings</p>
                        <BoxIcon className='w-7 h-7 shrink-0' />
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        201
                    </p>
                    <p className="text-xs font-medium truncate ">
                        <span className="text-green-600 truncate ">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                    <div className="absolute right-3 bottom-0 w-[40%] h-1/2 ">
                        <LineChartComponent />
                    </div>
                </div>
                <div className="relative w-full aspect-[16/6] md:aspect-[16/8]  rounded-xl bg-white shadow-md border p-3 flex flex-col items-start justify-between max-md:order-2">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold truncate ">Approved Reservations</p>
                        <SquareCheckIcon className='w-7 h-7 shrink-0' />
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        201
                    </p>
                    <p className="text-xs font-medium truncate ">
                        <span className="text-green-600 truncate ">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                    <div className="absolute right-3 bottom-0 w-[40%] h-1/2 ">
                        <LineChartComponent />
                    </div>
                </div>
                <div className="w-full row-span-2 rounded-xl bg-white p-3 flex flex-col items-start justify-between border shadow-md max-md:order-5">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold">Users</p>
                        {/* <Users2Icon className='w-7 h-7 shrink-0' /> */}
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        201
                    </p>
                    <p className="text-xs font-medium truncate ">
                        <span className="text-green-600 truncate ">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                    <div className="w-full h-[75%] flex items-center justify-center">
                        <PieChartComponent />
                    </div>
                </div>
                <div className="w-full h-full row-span-2 rounded-xl bg-white p-3 flex flex-col items-start justify-between border shadow-md max-md:order-6">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold truncate ">Available Campsites</p>
                        {/* <Users2Icon className='w-7 h-7 shrink-0' /> */}
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        201
                    </p>
                    <p className="text-xs font-medium truncate ">
                        <span className="text-green-600 truncate ">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                    <div className="w-full h-[75%] flex items-center justify-center">
                        <PieChartComponent />
                    </div>
                </div>
                <div className="relative w-full aspect-[16/6] md:aspect-[16/8]  rounded-xl bg-white shadow-md border p-3 flex flex-col items-start justify-between max-md:order-3">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold truncate ">Monthly Total</p>
                        <IndianRupeeIcon className='w-7 h-7 shrink-0' />
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        35347
                    </p>
                    <p className="text-xs font-medium truncate ">
                        <span className="text-green-600 truncate ">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                    <div className="absolute right-3 bottom-0 w-[40%] h-1/2 ">
                        <LineChartComponent />
                    </div>
                </div>
                <div className="relative w-full aspect-[16/6] md:aspect-[16/8] max-md:order-4 rounded-xl bg-white shadow-md border p-3 flex flex-col items-start justify-between">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold">Revenue</p>
                        <WalletIcon className='w-7 h-7 shrink-0' />
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        3534
                    </p>
                    <p className="text-xs font-medium truncate ">
                        <span className="text-green-600 truncate ">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                    <div className="absolute right-3 bottom-0 w-[40%] h-1/2 ">
                        <LineChartComponent />
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-3 gap-3">
                <div className="w-full grid grid-rows-2 grid-cols-1 gap-3 ">
                    <div className="w-full aspect-video rounded-xl shadow-md bg-white p-3" >
                        <div className="w-full flex items-center justify-between">
                            <h3 className="text-base font-semibold">
                                Booking dynamics
                            </h3>
                        </div>
                        <div className="h-[85%] w-full">
                            <BarChartComponent />
                        </div>
                    </div>
                    <div className="w-full aspect-video rounded-xl shadow-md bg-white p-3" >

                        <h2 className="text-base font-semibold">
                            Customer Feedback
                        </h2>
                    </div>
                </div>
                <div className="w-full h-full grid grid-cols-1 grid-rows-7 gap-3">
                    <div className="w-full h-full row-span-3 md:row-span-2 grid grid-cols-2 gap-2">
                        <div className="w-full h-full rounded-xl shadow-md bg-white p-3 flex flex-col items-center justify-between" >
                            <div className="w-full h-1/3 md:h-1/4 flex items-center justify-between">
                                <MdOutlineCancel className='w-10 h-10 inline' />
                                <div className="w-[70px] h-[70px] aspect-square">
                                    <RadialChartComponent />
                                </div>
                            </div>
                            <div className="w-full h-2/3 md:h-2/4 flex flex-col items-start justify-center ">
                                <p className="text-xs font-semibold">
                                    Cancellations
                                </p>
                                <h3 className="text-3xl md:text-4xl font-semibold">
                                    21
                                </h3>

                                <p className="text-xs font-semibold text-muted-foreground">
                                    This Month
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full rounded-xl shadow-md bg-white p-3 flex flex-col items-center justify-between" >
                            <div className="w-full h-1/3 md:h-1/4 flex items-center justify-between">
                                <MdFreeCancellation className='w-10 h-10 inline' />
                                <div className="w-[70px] h-[70px] aspect-square">
                                    <RadialChartComponent />
                                </div>
                            </div>
                            <div className="w-full h-2/3 md:h-2/4 flex flex-col items-start justify-center ">
                                <p className="text-xs font-semibold">
                                    Cancellations
                                </p>
                                <h3 className="text-3xl md:text-4xl font-semibold">
                                    21
                                </h3>

                                <p className="text-xs font-semibold text-muted-foreground">
                                    This Month
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full row-span-4 md:row-span-5 rounded-xl shadow-md bg-white p-3 flex flex-col items-start justify-between">
                        <p className="text-base font-semibold">
                            Latest Reservations
                        </p>
                        <div className="h-[80%] w-full aspect-auto ">
                            {/* <LatestReservations /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard