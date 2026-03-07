import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Website Compliance",
    description: "Stay compliant with regulations",
};
const sections = [
    {
        value: "evidence",
        label: "Evidence",
        title: "Secure Evidence with Screenshots",
        body: "Securing your brand's reputation and integrity is paramount. Achieve this by capturing timely screenshots of all your brand-related activities, serving as indisputable evidence of your actions.",
    },
    {
        value: "historical",
        label: "Historical Data",
        title: "Access Historical Data Instantly",
        body: "Your website serves as the primary point of interaction with users, making it essential to have its records readily available. Such documentation is invaluable during legal disputes, ensuring you're equipped to present a strong defense.",
    },
    {
        value: "regulations",
        label: "Regulations",
        title: "Simplify Compliance with Regulations",
        body: "Unforeseen complications can arise at any moment. It's crucial to have reliable documentation of your online presence at specific times. CronShot enables easy capture and archival of your web content, streamlining compliance and audit processes.",
    },
    {
        value: "litigation",
        label: "Litigation-Ready",
        title: "Be Litigation-Ready",
        body: "No business, from startups to multinational corporations, is immune to litigation risks. CronShot facilitates swift production and retrieval of your website and social media records, minimizing potential legal risks and expenses.",
    },
    {
        value: "claims",
        label: "Unfounded Claims",
        title: "Defend Against Unfounded Claims",
        body: "In today's environment, even the most reputable brands can face baseless allegations. Strengthen your defense with solid evidence, ensuring your brand's protection against any false accusations.",
    },
];

export default function WebsiteCompliance() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Hero header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Website Compliance
                    </h1>
                    <p className="text-xl text-gray-500">
                        Stay compliant with regulations.
                    </p>
                </div>

                {/* Tabs section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
                        How CronShot Helps Businesses with Website Compliance?
                    </h2>

                    <Tabs defaultValue="evidence">
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