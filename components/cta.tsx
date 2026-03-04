"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <motion.div   
            className="bg-gradient-to-r from-blue-700 to-blue-500 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to get started?</h3>
                <p className="text-white text-lg opacity-90">
                  We have a generous free tier available to get you started
                  right away.
                </p>
              </div>

              <div>
                <Link
                  className="px-6 py-4 rounded-md font-semibold text-blue-600 bg-gradient-to-r from-blue-100 to-white hover:opacity-90 hover:scale-105 transition-transform duration-200" href="/sign-up"
                >
                  Get Started for Free
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
