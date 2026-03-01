"use client";

import TopImage from "@/public/images/features-top-image.png";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function FeaturesHome() {
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-50 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-3xl md:text-4xl font mb-4">How CronShot works</h1>
            <p className="text-xl text-gray-600">
              Enter your website and we'll take care of the rest. Get started in
              minutes and start capturing screenshots.
            </p>
          </div>

          {/* Top image */}
          <div className="pb-12 md:pb-16">
            <Image src={TopImage} width={1104} alt="Features top" />
          </div>
        </div>
      </div>
    </section>
  );
}