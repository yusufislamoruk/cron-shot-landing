"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "./button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./navigation-menu";

export default function Header*() {
    const [top, setTop] = useState<boolean>(true);

    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    useEffect(() => {
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);
    
    return (
        <header className={`fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-12 lg:px-24 py-6 transition-all duration-100 ${!top ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm" : "bg-transparent border-b-0"}`}>
            <div className="flex-shrink-0 pl-20">
                <Logo />
            </div>
            <div className="hidden md:flex">
                <NavigationMenu>
                    <NavigationMenuList className="gap-3">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-gray-600 font-normal hover:text-gray-900 bg-transparent cursor-pointer text-xl pl-6">Use Cases</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="p-3 w-[190px] bg-white rounded-md shadow-lg flex flex-col gap-2">

                                    <Link href="/use-case/content-verification">
                                        <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                            Content Verification
                                        </div>
                                    </Link>
                                    <Link href="/use-case/competition-tracking">
                                        <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                            Competition Tracking
                                        </div>
                                    </Link>
                                    <Link href="/use-case/seo-monitoring">
                                        <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                            SEO Monitoring
                                        </div>
                                    </Link>
                                    <Link href="/use-case/brand-management">
                                        <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                            Brand Management
                                        </div>
                                    </Link>
                                    <Link href="/use-case/trend-tracking">
                                        <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                            Trend Tracking
                                        </div>
                                    </Link>
                                    <Link href="/use-case/website-compliance">
                                        <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                            Website Compliance
                                        </div>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <Link href="/pricing">
                            <NavigationMenuItem className="px-4 py-2 text-gray-600 font-normal hover:text-gray-900 bg-transparent cursor-pointer text-xl">
                                Pricing
                            </NavigationMenuItem>
                        </Link>
                        <Link href="/support">
                            <NavigationMenuItem className="px-4 py-2 text-gray-600 font-normal hover:text-gray-900 bg-transparent cursor-pointer text-xl">
                                Support
                            </NavigationMenuItem>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex items-center gap-6 text-gray-600 font-normal hover:text-gray-900 bg-transparent cursor-pointer text-xl pr-20 ">
                Sign in
                <Button className="bg-[#1C1C1E] text-white text-xl hover:bg-[#2C2C2E] rounded-md px-6 shadow-sm cursor-pointer text-base pb-3">
                    Sign up &rarr;
                </Button>
            </div>

        </header>
    )
}