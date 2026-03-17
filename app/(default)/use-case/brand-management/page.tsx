import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "Brand Management",
    description: "Protect your brand's reputation",
};

const sections = [
    {
        value: "track",
        label: "Track Changes",
        title: "Track Changes and Timelines",
        body: "Digital content is valuable, and you'll want to keep an eye on any updates over time. CronShot's screenshot service lets you make a web archive that's always there for you to check your site's history.",
    },
    {
        value: "informed",
        label: "Stay Informed",
        title: "Stay Informed About Your Brand",
        body: "You can't join a chat if you don't know it's happening. Watch what people say about you by monitoring Twitter mentions and Google news about your brand with CronShot. It's also handy for watching the top Google search results for your brand.",
    },
    {
        value: "reputation",
        label: "Reputation",
        title: "Keep Your Reputation Shiny",
        body: "Listening to feedback is key to keeping a good name. A single review can change everything. Tracking your brand can be tough, but CronShot makes it easy by saving screenshots of any mention of your brand for future analysis.",
    },
    {
        value: "memories",
        label: "Research",
        title: "Save Memories for Future Research",
        body: "Your website's info is vital for decision-making. If it's not saved, it could be lost forever. CronShot's archiving means future researchers and historians will have something to look back on.",
    },
    {
        value: "archive",
        label: "Archive",
        title: "Archive Your Website's Evolution",
        body: "With the quick pace of social media and news, lots of data is lost over time. CronShot saves every version of your site and temporary content, so nothing gets lost.",
    },
    {
        value: "journey",
        label: "Digital Journey",
        title: "Capture Your Digital Journey in Detail",
        body: "Just like a photo album, saving your web content for the future is priceless. CronShot helps you keep a perfect record of your online adventures.",
    },
    {
        value: "data",
        label: "Historical Data",
        title: "Make Smarter Choices With Historical Data",
        body: "With CronShot, your digital past is always visible, helping you plan better. Check how you're doing on social media or review past website content easily to improve your strategy.",
    },
    {
        value: "legacy",
        label: "Legacy",
        title: "Protect Your Brand's Legacy",
        body: "Watch over, save, and grow your brand's worth with CronShot's automatic web screenshot service. CronShot is like your personal web archive, keeping a record of your digital presence and making past resources available anytime for smooth future operations.",
    },
];

export default function BrandManagement() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Hero header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Brand Management
                    </h1>
                    <p className="text-xl text-gray-500">
                        Protect your brand's reputation with automated web monitoring.
                    </p>
                </div>

                {/* Tabs section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
                        How CronShot Helps Businesses with Brand Management
                    </h2>

                    <Tabs defaultValue="track">
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