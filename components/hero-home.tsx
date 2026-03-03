export default function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#ffffffb6" offset="0%" />
              <stop stopColor="#eaeaea" offset="77.402%" />
              <stop stopColor="#dfdfdf" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="md:pt-30 md:pb-20">
          <div className="text-center pb-12 md:pb-16 flex flex-col items-center">
            <h1 className="text-5xl md:text-[5.5rem] font-black leading-tight tracking-tight mb-4 text-[#1C1C1E]">
              Automated webpage{" "}
              <br className="hidden md:block " />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">screenshots</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8 font-medium">
              Archive webpages, track changes, and monitor performance with Cronshot.
            </p>
            <div className="mt-4">
              <button className="h-14 px-8 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white text-base font-semibold font-semibold shadow-lg transition-transform hover:scale-105 cursor-pointer">
                Get Started for Free
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}