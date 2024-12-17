import { Suspense } from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from './ui/card';

// import images of the profiles
import liviaBator from '../../public/img/avatar/livia-bator.png';
import randyPress from '../../public/img/avatar/randy-press.png';
import workman from '../../public/img/avatar/workman.png';
import workman2 from '../../public/img/avatar/workman2.png';
import workman3 from '../../public/img/avatar/workman3.png';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface Profile {
    name: string;
    role: string;
    avatar: StaticImageData;
    bold?: boolean;
}

const profiles: Profile[] = [
    {
        name: 'Livia Bator',
        role: 'CEO',
        avatar: liviaBator,
        bold: true,
    },
    {
        name: 'Randy Press',
        role: 'Director',
        avatar: randyPress,
    },
    {
        name: 'Workman',
        role: 'Designer',
        avatar: workman,
    },
    {
        name: 'Workman',
        role: 'Designer',
        avatar: workman2,
    },
    {
        name: 'Workman',
        role: 'Designer',
        avatar: workman3,
    },
];

const QuickTransfer = () => {
    return (
        <Card className='w-full h-full'>
            <CardContent className='!p-0'>
                <div className='flex flex-col mt-5 p-5'>
                    <div className='flex gap-10 overflow-scroll md:w-[445px]'>
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center'
                            >
                                <Avatar className='w-20 h-20'>
                                    <Suspense
                                        fallback={
                                            <AvatarFallback>LG</AvatarFallback>
                                        }
                                    >
                                        <Image
                                            src={profile.avatar}
                                            alt='logo'
                                            width={400}
                                            height={400}
                                        />
                                    </Suspense>
                                </Avatar>
                                <p
                                    className={cn(
                                        'whitespace-nowrap',
                                        profile.bold ? 'font-bold' : ''
                                    )}
                                >
                                    {profile.name}
                                </p>
                                <span
                                    className={cn(
                                        'text-[#718EBF]',
                                        profile.bold ? 'font-bold' : ''
                                    )}
                                >
                                    {profile.role}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className='flex mt-10 gap-4 w-full items-center justify-center'>
                        <span className='text-[#718EBF] whitespace-nowrap'>
                            Write Amount
                        </span>
                        <div className='flex items-center bg-[#EDF1F7] rounded-full md:mr-0 mr-10'>
                            <div className='flex-1 px-4 py-3'>
                                <input
                                    type='number'
                                    defaultValue={525.5}
                                    className='w-full bg-transparent text-[#718EBF] text-lg focus:outline-none'
                                />
                            </div>
                            <Button
                                className='rounded-full px-8 py-4 bg-[#1C1C1C] hover:bg-black text-xl gap-3 h-auto'
                                type='button'
                            >
                                Send
                                <svg
                                    viewBox='0 0 26 23'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='!w-5 !h-5'
                                >
                                    <path
                                        d='M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z'
                                        fill='white'
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuickTransfer;
