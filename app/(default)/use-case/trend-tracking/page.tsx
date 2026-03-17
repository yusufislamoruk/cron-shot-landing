import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Trend Tracking",
    description: "Keep track of trends and stay ahead of the competition",
};

const sections = [
    {
        value: "social",
        label: "Social Media",
        title: "Watch Your Social Media Presence Expand",
        body: "Track your growth across social platforms like Instagram, Facebook, and Twitter with ease. CronShot simplifies monitoring your social media metrics, saving you from the hassle of checking each profile manually. Gain valuable insights into your engagement trends with just one click.",
    },
    {
        value: "metrics",
        label: "Business Metrics",
        title: "Instantly Access Key Business Metrics",
        body: "Regularly keeping tabs on your KPIs across different teams is vital. CronShot consolidates your critical data in one place, enabling you to review any key metric easily and promptly, enhancing decision-making and strategic planning.",
    },
    {
        value: "alexa",
        label: "Alexa Rankings",
        title: "Evaluate Website Influence with Alexa",
        body: "Alexa rankings reflect your business's standing, showcasing its value to clients and customers. CronShot takes the workload off your shoulders by generating weekly snapshots of your Alexa Rank, allowing for consistent performance review over time.",
    },
    {
        value: "google-trends",
        label: "Google Trends",
        title: "Discover Your Standing with Google Trends",
        body: "Google Trends offers a straightforward way to measure your brand's search popularity against competitors. With CronShot, keeping up-to-date is effortless, as monthly captures of your Google Trends standings are automatically stored for future analysis.",
    },
    {
        value: "competitors",
        label: "Competitor Performance",
        title: "Compare Your Performance with Competitors",
        body: "In a world of rapid technological advancement, staying ahead means being aware of your rivals' moves. CronShot keeps you informed about critical business metrics, from pricing and promotions to trending strategies, ensuring you're always competitive.",
    },
];

export default function TrendTracking() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Hero header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Trend Tracking
                    </h1>
                    <p className="text-xl text-gray-500">
                        Keep track of trends and stay ahead of the competition.
                    </p>
                </div>

                {/* Tabs section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
                        How CronShot Helps Businesses with Trend Tracking?
                    </h2>

                    <Tabs defaultValue="social">
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
                            <Link href="/dashboard">Get Started for Free →</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}