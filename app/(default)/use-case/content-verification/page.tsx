import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Content Verification",
    description: "Verified content, always",
};
const sections = [
    {
        value: "uncertainty",
        label: "Eliminate Uncertainty",
        title: "Eliminate Uncertainty with Content Verification",
        body: "Content verification is essential for maintaining transparency and credibility. CronShot ensures you have a reliable record of your content, safeguarding against any potential disputes.",
    },
    {
        value: "sponsored",
        label: "Sponsored Content",
        title: "Proving Sponsored Content Authenticity",
        body: "Utilize CronShot for undeniable proof of your sponsored content's publication. Our automated screenshot capability ensures you possess credible evidence to demonstrate the posting of advertisements or promotions on specified dates.",
    },
    {
        value: "engagement",
        label: "High-Engagement Pages",
        title: "Identifying High-Engagement Webpages",
        body: "Capture the essence of your website's most engaging landing pages. CronShot aids in documenting the key interactive sections of your site periodically, spotlighting where user engagement peaks.",
    },
    {
        value: "evolution",
        label: "Article Evolution",
        title: "Tracking Article Evolution",
        body: "Articles evolve more frequently than anticipated. Leverage CronShot's automated screenshot service to observe and archive the progression of content modifications over time, safeguarding your digital footprint.",
    },
    {
        value: "polls",
        label: "Polls & Contests",
        title: "Safeguarding Polls or Contests",
        body: "When conducting polls or contests, the integrity of terms and conditions is paramount. CronShot ensures you're always prepared, enabling the easy retention of crucial documentation to circumvent potential disputes.",
    },
];

export default function ContentVerification() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Hero header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Content Verification
                    </h1>
                    <p className="text-xl text-gray-500">
                        Verified content, always.
                    </p>
                </div>

                {/* Tabs section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
                        How CronShot Helps Businesses with Content Verification?
                    </h2>

                    <Tabs defaultValue="uncertainty">
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