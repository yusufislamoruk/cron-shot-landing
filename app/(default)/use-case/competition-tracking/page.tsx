"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
    {
        value: "offers",
        label: "Offers & Giveaways",
        title: "Keep Up-to-Date with the Latest Offers and Giveaways",
        body: "When it comes to attracting your customers, you don't want to take any chances. Keep an eye on every offer and giveaway your rivals are running and lure their customers with even better discounts. Whether it concerns social media, blog or their 3rd party profile pages, CronShot makes it possible to track almost everything.",
    },
    {
        value: "pricing",
        label: "Product Prices",
        title: "Tracking Product Prices",
        body: "Changes in pricing of your competitor's product can hamper your sales too. Stay aware of their latest pricings with automated screenshots feature by CronShot.",
    },
    {
        value: "products",
        label: "New Products",
        title: "Know About Latest Products Launched",
        body: "Do you keep wondering what your competitors are up to? Are you curious about their next step? Be the first one to know about their latest products and features. Monitor the competitors the way you want.",
    },
    {
        value: "design",
        label: "Design Changes",
        title: "Regular Monitoring of Website Design Changes",
        body: "Even a minor change on your rivals' websites can play a huge role in conversions. Monitor their website changes and respond with a better design.",
    },
    {
        value: "reviews",
        label: "Reviews",
        title: "Keep Track of Their Reviews",
        body: "Keeping track of reviews of customers can be a great medium to understand possible flaws in the product. The shortcomings of your rivals can become your greatest competitive advantage.",
    },
];

export default function CompetitionTracking() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Hero header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Competition Tracking
                    </h1>
                    <p className="text-xl text-gray-500">
                        Keep an eye on your competitors.
                    </p>
                </div>

                {/* Tabs section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
                        How CronShot Helps Businesses with Competition Tracking?
                    </h2>

                    <Tabs defaultValue="offers">
                        {/* Tab triggers — scroll on mobile */}
                        <div className="overflow-x-auto pb-1">
                            <TabsList className="flex w-max min-w-full gap-1 bg-gray-100 rounded-xl p-1 h-auto flex-wrap">
                                {sections.map((s) => (
                                    <TabsTrigger
                                        key={s.value}
                                        value={s.value}
                                        className="text-sm px-4 py-2 rounded-lg whitespace-nowrap data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm cursor-pointer"
                                    >
                                        {s.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {/* Tab content panels */}
                        {sections.map((s) => (
                            <TabsContent key={s.value} value={s.value}>
                                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        {s.body}
                                    </p>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>

                    {/* CTA */}
                    <div className="mt-12 flex justify-center">
                        <Button asChild size="lg" className="bg-[#0066FF] hover:bg-blue-700 text-white px-8 rounded-lg shadow-md">
                            <Link href="/sign-up">Get Started for Free →</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}