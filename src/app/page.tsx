import BalanceHistory from '@/components/BalanceHistory';
import CreditCards from '@/components/CreditCards';
import ExpenseStatistics from '@/components/ExpenseStatistics';
import QuickTransfer from '@/components/QuickTransfer';
import RecentTransactions from '@/components/RecentTransactions';
import WeeklyActivity from '@/components/WeeklyActivity';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='mx-8 my-8 space-y-4'>
            <div className='flex md:flex-row flex-col gap-4'>
                <div>
                    <div className='flex justify-between mb-2'>
                        <span className='text-base font-medium'>My Cards</span>
                        <Link href='/' className='text-base font-medium mr-4'>
                            See All
                        </Link>
                    </div>
                    <div className='flex overflow-scroll whitespace-nowrap gap-4 md:w-[52vw] w-screen'>
                        <CreditCards />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='mb-2 text-lg font-medium -mt-1'>
                        Recent Transaction
                    </span>
                    <RecentTransactions />
                </div>
            </div>
            <div className='grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-4'>
                <div className='flex flex-col'>
                    <span className='mb-2 text-lg font-medium -mt-1'>
                        Weekly Activity
                    </span>
                    <WeeklyActivity />
                </div>
                <div className='flex flex-col'>
                    <span className='mb-2 text-lg font-medium -mt-1'>
                        Expense Statistics
                    </span>
                    <ExpenseStatistics />
                </div>
            </div>
            <div className='grid md:grid-cols-[1.5fr_2fr] grid-cols-1 gap-4'>
                <div className='flex flex-col'>
                    <span className='mb-2 text-lg font-medium -mt-1'>
                        Quick Transfer
                    </span>
                    <QuickTransfer />
                </div>
                <div className='flex flex-col'>
                    <span className='mb-2 text-lg font-medium -mt-1'>
                        Balance History
                    </span>
                    <BalanceHistory />
                </div>
            </div>
        </main>
    );
}
