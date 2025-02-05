import Link from 'next/link';
import { Card } from './ui/card';

interface Transaction {
    id: string;
    type: 'card' | 'paypal' | 'transfer';
    description: string;
    date: string;
    amount: number;
}

const transactions: Transaction[] = [
    {
        id: '1',
        type: 'card',
        description: 'Deposit from my Card',
        date: '28 January 2021',
        amount: -850,
    },
    {
        id: '2',
        type: 'paypal',
        description: 'Deposit Paypal',
        date: '25 January 2021',
        amount: 2500,
    },
    {
        id: '3',
        type: 'transfer',
        description: 'Jemi Wilson',
        date: '21 January 2021',
        amount: 5400,
    },
];

export default function RecentTransactions() {
    return (
        <Card className='md:w-[360px] md:h-[235px] p-4'>
            <div className='space-y-6'>
                {transactions.map((transaction) => (
                    <Link
                        href='/'
                        key={transaction.id}
                        className='flex items-center justify-between group rounded-lg'
                    >
                        <div className='flex items-center gap-4'>
                            <div
                                className={`p-3 rounded-full ${
                                    transaction.type === 'card'
                                        ? 'bg-[#FFF8E6]'
                                        : transaction.type === 'paypal'
                                        ? 'bg-[#EEF4FF]'
                                        : 'bg-[#E6FFF8]'
                                }`}
                            >
                                {transaction.type === 'card' ? (
                                    <svg
                                        width='28'
                                        height='28'
                                        viewBox='0 0 28 28'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M18.6452 24.6094H5.67984C4.9859 24.6087 4.32059 24.3327 3.8299 23.842C3.33921 23.3513 3.06322 22.686 3.0625 21.992V14.2543C3.06322 13.5604 3.33921 12.8951 3.8299 12.4044C4.32059 11.9137 4.9859 11.6377 5.67984 11.637H18.6452C19.3391 11.6377 20.0044 11.9137 20.4951 12.4044C20.9858 12.8951 21.2618 13.5604 21.2625 14.2543V21.992C21.2618 22.686 20.9858 23.3513 20.4951 23.842C20.0044 24.3327 19.3391 24.6087 18.6452 24.6094ZM5.67984 13.2776C5.42089 13.2779 5.17263 13.3809 4.98952 13.564C4.80641 13.7471 4.70341 13.9954 4.70312 14.2543V21.992C4.70341 22.251 4.80641 22.4993 4.98952 22.6824C5.17263 22.8655 5.42089 22.9685 5.67984 22.9688H18.6452C18.9041 22.9685 19.1524 22.8655 19.3355 22.6824C19.5186 22.4993 19.6216 22.251 19.6219 21.992V14.2543C19.6216 13.9954 19.5186 13.7471 19.3355 13.564C19.1524 13.3809 18.9041 13.2779 18.6452 13.2776H5.67984Z'
                                            fill='#FFBB38'
                                        />
                                        <path
                                            d='M22.3212 20.1917H20.4422C20.2246 20.1917 20.016 20.1053 19.8621 19.9515C19.7083 19.7976 19.6219 19.589 19.6219 19.3714C19.6219 19.1538 19.7083 18.9452 19.8621 18.7914C20.016 18.6375 20.2246 18.5511 20.4422 18.5511H22.3212C22.58 18.5505 22.828 18.4474 23.0109 18.2643C23.1937 18.0812 23.2966 17.8331 23.2969 17.5744V9.83664C23.2967 9.57778 23.1939 9.32954 23.0111 9.14635C22.8282 8.96315 22.5801 8.85995 22.3212 8.85938H9.35593C9.09698 8.85966 8.84871 8.96266 8.66561 9.14577C8.4825 9.32888 8.3795 9.57714 8.37921 9.83609V12.4567C8.37921 12.6743 8.29279 12.8829 8.13895 13.0368C7.98511 13.1906 7.77646 13.277 7.5589 13.277C7.34134 13.277 7.13269 13.1906 6.97885 13.0368C6.82501 12.8829 6.73859 12.6743 6.73859 12.4567V9.83664C6.73917 9.1426 7.01509 8.47715 7.5058 7.98635C7.9965 7.49554 8.6619 7.21947 9.35593 7.21875H22.3212C23.0151 7.21976 23.6802 7.49595 24.1707 7.98673C24.6611 8.47751 24.9369 9.14279 24.9375 9.83664V17.5744C24.9368 18.2681 24.6609 18.9333 24.1705 19.4239C23.68 19.9146 23.015 20.1907 22.3212 20.1917Z'
                                            fill='#FFBB38'
                                        />
                                        <path
                                            d='M20.4422 18.7463H3.88281C3.66525 18.7463 3.4566 18.6599 3.30276 18.506C3.14893 18.3522 3.0625 18.1436 3.0625 17.926V15.1708C3.0625 14.9533 3.14893 14.7446 3.30276 14.5908C3.4566 14.437 3.66525 14.3505 3.88281 14.3505H20.4422C20.6597 14.3505 20.8684 14.437 21.0222 14.5908C21.1761 14.7446 21.2625 14.9533 21.2625 15.1708V17.926C21.2625 18.1436 21.1761 18.3522 21.0222 18.506C20.8684 18.6599 20.6597 18.7463 20.4422 18.7463ZM4.70312 17.1057H19.6219V15.9911H4.70312V17.1057Z'
                                            fill='#FFBB38'
                                        />
                                    </svg>
                                ) : transaction.type === 'paypal' ? (
                                    <svg
                                        width='22'
                                        height='24'
                                        viewBox='0 0 22 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M18.995 6.38251C18.9812 4.85223 18.3641 3.3892 17.2779 2.31119C16.1917 1.23318 14.7241 0.627254 13.1937 0.625011H4.74998C4.54025 0.622312 4.33653 0.69504 4.17592 0.829947C4.01532 0.964855 3.90852 1.15296 3.87498 1.36001L0.882478 20.1288C0.863781 20.253 0.872078 20.3799 0.906806 20.5007C0.941534 20.6215 1.00188 20.7334 1.08373 20.8288C1.16505 20.9264 1.26667 21.0052 1.38151 21.0596C1.49635 21.114 1.62166 21.1427 1.74873 21.1438H5.36248L5.16998 22.36C5.14953 22.4861 5.15693 22.6151 5.19165 22.738C5.22637 22.8609 5.28757 22.9747 5.37096 23.0714C5.45435 23.1681 5.55789 23.2454 5.67433 23.2979C5.79077 23.3503 5.91728 23.3767 6.04498 23.375H10.1137C10.3222 23.378 10.5249 23.3065 10.6853 23.1734C10.8457 23.0403 10.9533 22.8542 10.9887 22.6488L11.8637 17.3025H14.62C16.3451 17.2956 17.9974 16.606 19.2156 15.3845C20.4338 14.163 21.1189 12.5089 21.1212 10.7838V10.5388C21.1203 9.72727 20.9272 8.92754 20.5576 8.2051C20.188 7.48266 19.6525 6.85807 18.995 6.38251ZM5.49373 2.37501H13.1937C14.1117 2.37783 15.0017 2.69168 15.7184 3.26535C16.4351 3.83902 16.9362 4.63865 17.14 5.53376C16.7614 5.44498 16.3738 5.40093 15.985 5.40251H8.68748C8.47775 5.39981 8.27403 5.47254 8.11342 5.60745C7.95282 5.74235 7.84602 5.93046 7.81248 6.13751L7.29623 9.37501C7.2591 9.60708 7.31568 9.84439 7.45351 10.0347C7.59135 10.2251 7.79916 10.3529 8.03123 10.39C8.26329 10.4271 8.5006 10.3706 8.69095 10.2327C8.8813 10.0949 9.0091 9.88708 9.04623 9.65501L9.44873 7.13501H16.0025C16.4219 7.13721 16.8373 7.21732 17.2275 7.37126C17.0611 8.74103 16.4003 10.0029 15.3691 10.9197C14.3378 11.8365 13.0073 12.3451 11.6275 12.35H7.56748C7.35903 12.347 7.15634 12.4185 6.99592 12.5516C6.8355 12.6848 6.7279 12.8708 6.69248 13.0763L5.62498 19.3938H2.77248L5.49373 2.37501ZM19.3712 10.7838C19.3689 12.0448 18.8682 13.2538 17.9781 14.1471C17.0881 15.0404 15.881 15.5456 14.62 15.5525H11.12C10.9115 15.5495 10.7088 15.621 10.5484 15.7541C10.388 15.8873 10.2804 16.0733 10.245 16.2788L9.36998 21.625H7.05998L7.25248 20.4088L8.30248 14.1175H11.61C13.2435 14.1127 14.8295 13.5677 16.121 12.5675C17.4124 11.5672 18.3368 10.1679 18.75 8.58751C19.1561 9.15691 19.3734 9.83937 19.3712 10.5388V10.7838Z'
                                            fill='#396AFF'
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width='28'
                                        height='28'
                                        viewBox='0 0 28 28'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M14.0001 11.379C14.4962 11.379 14.9013 11.7831 14.9013 12.2792C14.9013 12.7319 15.2693 13.0988 15.7219 13.0988C16.1736 13.0988 16.5415 12.7319 16.5415 12.2792C16.5415 11.1671 15.817 10.2287 14.8197 9.88556V9.42048C14.8197 8.96884 14.4528 8.59987 14.0001 8.59987C13.5464 8.59987 13.1795 8.96884 13.1795 9.42048V9.88556C12.1822 10.2287 11.4597 11.1671 11.4597 12.2792C11.4597 13.6817 12.5987 14.8206 14.0001 14.8206C14.4962 14.8206 14.9013 15.2257 14.9013 15.7218C14.9013 16.2189 14.4962 16.6231 14.0001 16.6231C13.504 16.6231 13.0999 16.2189 13.0999 15.7218C13.0999 15.2691 12.732 14.9012 12.2793 14.9012C11.8256 14.9012 11.4597 15.2691 11.4597 15.7218C11.4597 16.8339 12.1822 17.7713 13.1795 18.1144V18.5795C13.1795 19.0332 13.5464 19.4011 14.0001 19.4011C14.4528 19.4011 14.8197 19.0332 14.8197 18.5795V18.1144C15.817 17.7713 16.5415 16.8339 16.5415 15.7218C16.5415 14.3204 15.4016 13.1804 14.0001 13.1804C13.504 13.1804 13.0999 12.7763 13.0999 12.2792C13.0999 11.7831 13.504 11.379 14.0001 11.379ZM20.872 18.5547C21.274 18.7666 21.769 18.6126 21.9799 18.2136C22.662 16.9248 23.0217 15.4676 23.0217 14C23.0217 9.02671 18.9734 4.97947 14.0001 4.97947C9.0258 4.97947 4.97856 9.02671 4.97856 14C4.97856 18.9743 9.0258 23.0215 14.0001 23.0215C15.446 23.0215 16.8826 22.6722 18.1548 22.0097C18.5569 21.802 18.7129 21.3049 18.5042 20.9039C18.2954 20.5039 17.8004 20.3447 17.3973 20.5545C16.3441 21.1044 15.2 21.3824 14.0001 21.3824C9.93013 21.3824 6.61771 18.071 6.61771 14C6.61771 9.93104 9.93013 6.61862 14.0001 6.61862C18.0701 6.61862 21.3825 9.93104 21.3825 14C21.3825 15.202 21.0869 16.3936 20.5309 17.4457C20.318 17.8467 20.471 18.3428 20.872 18.5547ZM14.0001 1.69702C11.6241 1.69702 9.31725 2.37707 7.3298 3.66173C6.94844 3.90771 6.83992 4.41517 7.08589 4.7955C7.3329 5.17583 7.83829 5.28332 8.22069 5.03941C9.94046 3.92735 11.9414 3.33824 14.0001 3.33824C19.8798 3.33824 24.6619 8.12135 24.6619 14C24.6619 19.8797 19.8798 24.6628 14.0001 24.6628C8.12044 24.6628 3.33733 19.8797 3.33733 14C3.33733 11.9609 3.91507 9.97755 5.00956 8.26708C5.25347 7.88468 5.14185 7.37722 4.75945 7.13331C4.37808 6.8894 3.87063 7.00102 3.62775 7.38239C2.36479 9.35744 1.69714 11.6477 1.69714 14C1.69714 20.785 7.21508 26.303 14.0001 26.303C20.7841 26.303 26.3031 20.785 26.3031 14C26.3031 7.21703 20.7841 1.69702 14.0001 1.69702Z'
                                            fill='#16DBCC'
                                        />
                                    </svg>
                                )}
                            </div>
                            <div>
                                <p className='font-sm text-gray-900'>
                                    {transaction.description}
                                </p>
                                <p className='text-sm text-[#7C8DB5]'>
                                    {transaction.date}
                                </p>
                            </div>
                        </div>
                        <span
                            className={`font-semibold ${
                                transaction.amount < 0
                                    ? 'text-red-500'
                                    : 'text-emerald-500'
                            }`}
                        >
                            {transaction.amount < 0 ? '-' : '+'}$
                            {Math.abs(transaction.amount).toLocaleString()}
                        </span>
                    </Link>
                ))}
            </div>
        </Card>
    );
}
