"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
    { month: "January", desktop: 100 },
    { month: "February", desktop: 150 },
    { month: "March", desktop: 120 },
    { month: "April", desktop: 180 },
    { month: "May", desktop: 130 },
    { month: "June", desktop: 200 },
];


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function LineChartComponent() {
    return (
     
                <ChartContainer config={chartConfig} className="size-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 0,
                            right: 0,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        {/* <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        /> */}
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="desktop"
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
    )
}
