import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex justify-center items-center h-full'>
            <Link href='/'>
                Not Found, <span className='font-bold'>Return Home</span>
            </Link>
        </div>
    );
}
