import { Archive, CloudDrizzle, Mail } from "lucide-react";

export default function Features() {
  return (
    <section className="relative py-24 bg-white">
      <div className="absolute left-0 right-0 top-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2 z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Features
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Check out some of the features that makes CronShot the best tool for
            automating website screenshots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          <div className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.15)] cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <Archive size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Archive Screenshots</h3>
            <p className="text-gray-500 leading-relaxed">
              Secure and centralize your screenshots, ensuring they are endlessly
              preserved and readily available.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.15)] cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <CloudDrizzle size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Webpage Comparison
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Compare screenshots of the webpages and get AI-powered insights.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.15)] cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <Mail size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Instant Notifications
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Receive email notifications with the screenshot instantly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
