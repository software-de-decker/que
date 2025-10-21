import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextFont } from 'next/dist/compiled/@next/font';
import { JSX, ReactNode } from 'react';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Que - Your Entertainment Hub',
    description: 'Track, discover, and watch together. The ultimate entertainment companion.',
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
