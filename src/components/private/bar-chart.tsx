"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { date: "2014-01-15", desktop: 220, mobile: 180 },
    { date: "2014-02-15", desktop: 240, mobile: 190 },
    { date: "2014-03-15", desktop: 260, mobile: 200 },
    { date: "2014-04-15", desktop: 280, mobile: 210 },
    { date: "2014-05-15", desktop: 300, mobile: 220 },
    { date: "2014-06-15", desktop: 320, mobile: 230 },
    { date: "2014-07-15", desktop: 340, mobile: 240 },
    { date: "2014-08-15", desktop: 360, mobile: 250 },
    { date: "2014-09-15", desktop: 380, mobile: 260 },
    { date: "2014-10-15", desktop: 400, mobile: 270 },
    { date: "2014-11-15", desktop: 420, mobile: 280 },
    { date: "2014-12-15", desktop: 440, mobile: 290 },
];


const chartConfig = {
    views: {
        label: "Page Views",
    },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function BarChartComponent() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("desktop")

    const total = React.useMemo(
        () => ({
            desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
            mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
        }),
        []
    )

    return (
        <Card className="size-full p-0 border-none shadow-none">
            {/* <CardHeader className="w-full h-full flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
            </CardHeader> */}
            <CardContent className="size-full p-0">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-full w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
