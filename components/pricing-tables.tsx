"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Starter",
        monthlyPrice: 0,
        annualPrice: 0,
        description: "Perfect for individuals just getting started.",
        features: [
            "Track up to 1 web page",
            "Daily / weekly / monthly",
            "Email support",
        ],
        cta: "Try for free",
        href: "/sign-up",
        popular: false,
        enterprise: false,
    },
    {
        name: "Agency",
        monthlyPrice: 14,
        annualPrice: 11,
        description: "Great for small teams and agencies.",
        features: [
            "Track up to 5 web pages",
            "Daily / weekly / monthly",
            "Email support",
        ],
        cta: "Get Started for Free",
        href: "/sign-up",
        popular: true,
        enterprise: false,
    },
    {
        name: "Premium",
        monthlyPrice: 49,
        annualPrice: 39,
        description: "For growing businesses that need more power.",
        features: [
            "Track up to 25 web pages",
            "Daily / weekly / monthly",
            "Priority email support",
        ],
        cta: "Get Started for Free",
        href: "/sign-up",
        popular: false,
        enterprise: false,
    },
    {
        name: "Enterprise",
        monthlyPrice: null,
        annualPrice: null,
        description: "Custom plans tailored to your organization.",
        features: [
            "Track any number of pages",
            "Hourly / daily / weekly / monthly",
            "SSO, API & custom integrations",
            "Priority email support",
        ],
        cta: "Contact us",
        href: "/support",
        popular: false,
        enterprise: true,
    },
];

export default function PricingTables() {
    const [annual, setAnnual] = useState<boolean>(true);

    return (
        <section className="bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-4xl mx-auto text-center pb-12"
                    >
                        <h1 className="text-4xl md:text-[55px] font-bold tracking-tight mb-4 ">
                            Start for free. Pay as you grow. <span>Switch at any time</span>
                        </h1>
                        <p className="text-2xl text-gray-500 max-w-3xl mx-auto">
                            No matter how many team members you have - our pricing is simple, transparent and adapts to the size of your company.
                        </p>
                    </motion.div>

                    {/* Billing toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="flex justify-center mb-14"
                    >
                        <div className="inline-flex items-center bg-gray-100 rounded-xl p-1 gap-1">
                            <button
                                onClick={() => setAnnual(true)}
                                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer ${annual
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Bill Yearly{" "}
                                <span className="text-green-500 font-semibold">−20%</span>
                            </button>
                            <button
                                onClick={() => setAnnual(false)}
                                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${!annual
                                    ? "bg-white text-gray-900 shadow-sm "
                                    : "text-gray-500 hover:text-gray-700 cursor-pointer"
                                    }`}
                            >
                                Bill Monthly
                            </button>
                        </div>
                    </motion.div>

                    {/* Cards grid */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch"
                    >
                        {plans.map((plan) => (
                            <motion.div
                                key={plan.name}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                className={`relative flex flex-col rounded-2xl p-7 transition-shadow duration-200 ${plan.popular
                                    ? "bg-blue-100 border-2 border-[#0066FF] shadow-xl shadow-blue-200"
                                    : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
                                    }`}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400 font-semibold px-3 py-0.5 text-xs shadow">
                                            Popular
                                        </Badge>
                                    </div>
                                )}

                                {/* Plan name & description */}
                                <div className="mb-5">
                                    <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${plan.popular ? "text-[#0066FF]" : "text-gray-400"}`}>
                                        {plan.name}
                                    </p>
                                    <p className="text-sm leading-snug text-gray-500">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    {plan.enterprise ? (
                                        <p className="text-3xl font-bold text-gray-900">
                                            Custom
                                        </p>
                                    ) : (
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-gray-900">$</span>
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                {annual ? plan.annualPrice : plan.monthlyPrice}
                                            </span>
                                            <span className="text-sm ml-1 text-gray-400">/mo</span>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Features */}
                                <ul className="space-y-3 mb-8 grow">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2.5">
                                            <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-green-50">
                                                <Check className="w-2.5 h-2.5 stroke-[3] text-green-600" />
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Button
                                    asChild
                                    size="sm"
                                    className="w-full rounded-lg font-semibold text-sm h-10 bg-[#0066FF] hover:bg-blue-700 text-white"
                                >
                                    <a href={plan.href}>{plan.cta}</a>
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}