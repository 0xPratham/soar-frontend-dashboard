import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import EditProfile from './EditProfile';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: 'Setting | Soar Frontend Dashboard',
};

const page = () => {
    return (
        <main className='mx-8 my-8 space-y-4'>
            <Card className='h-[717px] !border-[#FFFFFF]'>
                <CardHeader>
                    <div className='flex space-x-8 mb-8 border-b'>
                        <Link
                            href='/setting'
                            className='text-lg whitespace-nowrap font-semibold pb-2 relative after:absolute after:-bottom-0 after:left-0 after:right-0 after:h-1 after:bg-black after:rounded-lg'
                        >
                            Edit Profile
                        </Link>
                        <Link
                            href='/setting'
                            className='text-lg text-[#718EBF] whitespace-nowrap'
                        >
                            Preferences
                        </Link>
                        <Link
                            href='/setting'
                            className='text-lg text-[#718EBF] whitespace-nowrap'
                        >
                            Security
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <EditProfile />
                </CardContent>
            </Card>
        </main>
    );
};

export default page;
