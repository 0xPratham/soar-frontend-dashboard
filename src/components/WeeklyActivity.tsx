'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const data = [
    { day: 'Sat', withdraw: 450, deposit: 230 },
    { day: 'Sun', withdraw: 340, deposit: 130 },
    { day: 'Mon', withdraw: 320, deposit: 250 },
    { day: 'Tue', withdraw: 450, deposit: 350 },
    { day: 'Wed', withdraw: 150, deposit: 230 },
    { day: 'Thu', withdraw: 380, deposit: 230 },
    { day: 'Fri', withdraw: 380, deposit: 330 },
];

export default function WeeklyActivity() {
    return (
        <Card className='w-full'>
            <CardContent className='!p-0'>
                <div className='h-[322px] w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray='3 3'
                                vertical={false}
                            />
                            <XAxis
                                dataKey='day'
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                domain={[0, 500]}
                                ticks={[0, 100, 200, 300, 400, 500]}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Legend
                                verticalAlign='top'
                                height={40}
                                iconType='circle'
                                align='right'
                                formatter={(value) => (
                                    <span
                                        style={{
                                            color: '#64748b',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {value.charAt(0).toUpperCase() +
                                            value.slice(1)}
                                    </span>
                                )}
                            />
                            <Bar
                                dataKey='withdraw'
                                fill='#000000'
                                radius={[20, 20, 20, 20]}
                                maxBarSize={20}
                            />
                            <Bar
                                dataKey='deposit'
                                fill='#396AFF'
                                radius={[20, 20, 20, 20]}
                                maxBarSize={20}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
