'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent } from './ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from './ui/chart';

const chartData = [
    { month: 'Jul', balance: Math.floor(Math.random() * 900) },
    { month: 'Aug', balance: Math.floor(Math.random() * 900) },
    { month: 'Sep', balance: Math.floor(Math.random() * 900) },
    { month: 'Oct', balance: Math.floor(Math.random() * 900) },
    { month: 'Nov', balance: Math.floor(Math.random() * 900) },
    { month: 'Dec', balance: Math.floor(Math.random() * 900) },
    { month: 'Jan', balance: Math.floor(Math.random() * 900) },
];
const chartConfig = {
    balance: {
        label: 'Balance',
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig;

const BalanceHistory = () => {
    return (
        <Card className='flex flex-col'>
            <CardContent className='flex-1 pb-0'>
                <ChartContainer
                    config={chartConfig}
                    className='my-6 h-[250px] w-full'
                >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -20,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={3}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Area
                            dataKey='balance'
                            type='natural'
                            stroke='#1814F3'
                            strokeWidth={2}
                            fill='#2D60FF40'
                            fillOpacity={0.9}
                            stackId='a'
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default BalanceHistory;
