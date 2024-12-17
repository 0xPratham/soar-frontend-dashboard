'use client';

import { Pie, PieChart } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
    {
        expenseStatistics: 'Entertainment',
        visitors: 30,
        fill: 'var(--color-entertainment)',
    },
    {
        expenseStatistics: 'Investment',
        visitors: 20,
        fill: 'var(--color-investment)',
    },
    { expenseStatistics: 'Others', visitors: 35, fill: 'var(--color-others)' },
    {
        expenseStatistics: 'Bill Expense',
        visitors: 15,
        fill: 'var(--color-billExpense)',
    },
];

const chartConfig = {
    entertainment: {
        label: 'Entertainment',
        color: '#343C6A',
    },
    investment: {
        label: 'Investment',
        color: '#396AFF',
    },
    others: {
        label: 'Others',
        color: '#232323',
    },
    billExpense: {
        label: 'Bill Expense',
        color: '#FC7900',
    },
} satisfies ChartConfig;

export default function ExpenseStatistics() {
    return (
        <Card className='flex flex-col'>
            <CardContent className='flex-1 pb-0'>
                <ChartContainer
                    config={chartConfig}
                    className='mx-auto aspect-square max-h-[322px] pb-0 [&_.recharts-pie-label-text]:fill-foreground'
                >
                    <PieChart>
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className='percentage'
                                    hideLabel
                                />
                            }
                        />
                        <Pie
                            data={chartData}
                            dataKey='visitors'
                            label
                            nameKey='expenseStatistics'
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
