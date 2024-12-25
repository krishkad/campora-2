import React from 'react';
import {
    BoxIcon,
    IndianRupeeIcon,
    SquareCheckIcon,
    WalletIcon
} from 'lucide-react';
import PieChartComponent from './pie-chart';
import BarChartComponent from './bar-chart';

const Dashboard = () => {
    return (
        <div className=' max-w-6xl mx-auto rounded-md'>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 grid-rows-8 md:grid-rows-2 gap-3">
                <div className="w-full aspect-[16/6] md:aspect-[16/8]  rounded-xl bg-white shadow-md border p-3 flex flex-col items-start justify-between">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold">Order</p>
                        <BoxIcon className='w-7 h-7 shrink-0' />
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        201
                    </p>
                    <p className="text-xs font-medium">
                        <span className="text-green-600">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                </div>
                <div className="w-full aspect-[16/6] md:aspect-[16/8]  rounded-xl bg-white shadow-md border p-3 flex flex-col items-start justify-between">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold">Approved</p>
                        <SquareCheckIcon className='w-7 h-7 shrink-0' />
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        201
                    </p>
                    <p className="text-xs font-medium">
                        <span className="text-green-600">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                </div>
                <div className="w-full row-span-2 rounded-xl bg-white p-3 flex flex-col items-start justify-between border shadow-md">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold">Users</p>
                        {/* <Users2Icon className='w-7 h-7 shrink-0' /> */}
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        201
                    </p>
                    <p className="text-xs font-medium">
                        <span className="text-green-600">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                    <div className="w-full h-[75%] flex items-center justify-center">
                        <PieChartComponent />
                    </div>
                </div>
                <div className="w-full h-full row-span-2 rounded-xl bg-white p-3 flex flex-col items-start justify-between border shadow-md">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold">Subscriptions</p>
                        {/* <Users2Icon className='w-7 h-7 shrink-0' /> */}
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        201
                    </p>
                    <p className="text-xs font-medium">
                        <span className="text-green-600">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                    <div className="w-full h-[75%] flex items-center justify-center">
                        <PieChartComponent />
                    </div>
                </div>
                <div className="w-full aspect-[16/6] md:aspect-[16/8]  rounded-xl bg-white shadow-md border p-3 flex flex-col items-start justify-between">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold">Monthly Total</p>
                        <IndianRupeeIcon className='w-7 h-7 shrink-0' />
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        35347
                    </p>
                    <p className="text-xs font-medium">
                        <span className="text-green-600">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                </div>
                <div className="w-full aspect-[16/6] md:aspect-[16/8]  rounded-xl bg-white shadow-md border p-3 flex flex-col items-start justify-between">
                    <div className="w-full flex items-start justify-between">
                        <p className="font-semibold">Revenue</p>
                        <WalletIcon className='w-7 h-7 shrink-0' />
                    </div>
                    <p className="w-full text-4xl font-semibold">
                        3534
                    </p>
                    <p className="text-xs font-medium">
                        <span className="text-green-600">
                            0.2%
                        </span>{" "}
                        Monthly Growth
                    </p>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-6 gap-3">
                <div className="grid grid-cols-1 grid-rows-2 gap-3">
                    <div className="w-full aspect-video rounded-xl shadow-md bg-white p-3" >
                        <div className="w-full flex items-center justify-between">
                            <h3 className="text-base font-semibold">
                                Sale dynamics
                            </h3>
                        </div>
                        <div className="w-full h-full">
                            <BarChartComponent />
                        </div>
                    </div>
                    <div className="w-full aspect-video rounded-xl shadow-md bg-white" />
                </div>
                <div className="w-full grid grid-cols-1 grid-rows-8 gap-3">
                    <div className="w-full h-full row-span-3 grid grid-cols-2 gap-2">
                        <div className="w-full h-full rounded-xl shadow-md bg-white" />
                        <div className="w-full h-full rounded-xl shadow-md bg-white" />
                    </div>
                    <div className="w-full h-full row-span-5 rounded-xl shadow-md bg-white" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard