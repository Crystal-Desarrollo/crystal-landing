import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Header} from "@/partials/home/header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Crystal Desarrollo",
    description: "Building amazing digital experiences",
};

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const {locale} = await params;

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NextIntlClientProvider messages={messages}>
            <div
                className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 relative"
            >
                <Header/>
                <div>
                    {children}
                </div>
            </div>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
