import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "SEO Monitoring",
    description: "Always have eyes on your SEO performance",
};

const sections = [
    {
        value: "serp",
        label: "SERP Tracking",
        title: "Automate SERP Rank Tracking",
        body: "Stop spending endless hours checking the ranks of your target keywords. Set your SERP rank monitoring on autopilot with CronShot and dedicate your time to strategies that boost ranks and traffic.",
    },
    {
        value: "control",
        label: "SEO Tactics",
        title: "Gain Full Control Over SEO Tactics",
        body: "Noticed a rise in your keyword ranks? Apply those winning tactics across other pages. Suffered a drop? Time to refine your SEO approach. CronShot offers real-time insights into your SERP positions, ensuring you're always in command.",
    },
    {
        value: "ppc",
        label: "PPC Competitors",
        title: "Monitor New PPC Competitors",
        body: "Don't just focus on organic rankings. Keep an eye on emerging competitors in the paid ads space with CronShot. Today's PPC advertiser could be tomorrow's organic ranking rival.",
    },
    {
        value: "ctr",
        label: "CTR Enhancement",
        title: "Enhance Your CTR Against Competitors",
        body: "Looking to boost your click-through rate? Analyze and outdo your competitors' meta tags and landing pages. CronShot alerts you to their updates, enabling you to counteract swiftly.",
    },
    {
        value: "holistic",
        label: "SERP Presence",
        title: "Get a Holistic View of Your SERP Presence",
        body: "There's more to SERPs than just organic listings. From stock prices to maps and Google listings, keep abreast of everything with CronShot to continuously attract new users.",
    },
    {
        value: "archive",
        label: "SEO Archive",
        title: "Maintain an SEO Archive",
        body: "Need to look back on your SEO performance? CronShot lets you maintain a SERP archive for your key terms, providing a clear picture of past rankings and ongoing progress.",
    },
];

export default function SEOMonitoring() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Hero header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        SEO Monitoring
                    </h1>
                    <p className="text-xl text-gray-500">
                        Always have eyes on your SEO performance.
                    </p>
                </div>

                {/* Tabs section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
                        How CronShot Helps Businesses with SEO Monitoring?
                    </h2>

                    <Tabs defaultValue="serp">
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