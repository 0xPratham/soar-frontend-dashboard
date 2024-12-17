'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
    error,
}: {
    error: Error & { digest?: string };
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='flex justify-center items-center h-full'>
            <Link href='/'>
                Something went wrong!,{' '}
                <span className='font-bold'>Return Home</span>
            </Link>
        </div>
    );
}
