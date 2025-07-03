import {ReactNode} from "react";
import { Geist, Geist_Mono, Inter } from "next/font/google";

export default function AdminLayout ({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    // const geistSans = Geist({
    //   variable: "--font-geist-sans",
    //   subsets: ["latin"],
    // });
    
    // const geistMono = Geist_Mono({
    //   variable: "--font-geist-mono",
    //   subsets: ["latin"],
    // });
    
    // const inter = Inter({
    //     variable: "--font-inter",
    //     subsets: ["latin"],
    // });
    
    return (
    <>
        {children}
    </>
    );
}