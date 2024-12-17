import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Soar Frontend Dashboard',
    description: 'Soar Frontend Dashboard',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={geistSans.className}>
                <SidebarProvider>
                    <AppSidebar />
                    <Header>{children}</Header>
                </SidebarProvider>
                <Toaster />
            </body>
        </html>
    );
}
