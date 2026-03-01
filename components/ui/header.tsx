"use client";
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

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
            <div className="flex-shrink-0">
                <Logo />
            </div>
            <div className="hidden md:flex">
                <NavigationMenu>
                    <NavigationMenuList className="gap-3">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-gray-600 font-normal hover:text-gray-900 bg-transparent cursor-pointer">Use Cases</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="p-3 w-[190px] bg-white rounded-md shadow-lg flex flex-col gap-2">
                                    <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                        Content Verification                                      
                                    </div>
                                    <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                        Competition Tracking
                                    </div>
                                    <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                        SEO Monitoring
                                    </div>
                                    <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                        Brand Management
                                    </div>
                                    <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                        Trend Tracking
                                    </div>
                                    <div className="font-medium text-gray-600 hover:text-gray-900 cursor-pointer">
                                        Website Compliance
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="px-4 py-2 text-gray-600 font-normal hover:text-gray-900 bg-transparent cursor-pointer">
                            Pricing
                        </NavigationMenuItem>
                        <NavigationMenuItem className="px-4 py-2 text-gray-600 font-normal hover:text-gray-900 bg-transparent cursor-pointer">
                            Support
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>                
            </div>
            
            <div className="flex items-center gap-6 text-gray-600 font-normal hover:text-gray-900 bg-transparent cursor-pointer">
                Sign in
                <Button className="bg-[#1C1C1E] text-white hover:bg-[#2C2C2E] rounded-md px-6 shadow-sm cursor-pointer">
                    Sign up &rarr;
                </Button>
            </div>
            
        </header>
    )
}