export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white space-y-2 [font-family:var(--font-primary)]">
            <span className="block">Hey you 👋</span>
            <span className="block text-blue-200">Join a community of founders</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100 [font-family:var(--font-primary)] font-extralight">
            We're a bunch of founders who hang out, help each other out, and occasionally do some business. No corporate stuff, just real connections.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#apply"
              className="px-8 py-4 text-lg font-light rounded-full bg-white text-blue-900 hover:bg-blue-50 transition-colors [font-family:var(--font-primary)]"
            >
              Join Us
            </a>
            <a
              href="#activities"
              className="px-8 py-4 text-lg font-light rounded-full border-2 border-white text-white hover:bg-white/10 transition-colors [font-family:var(--font-primary)]"
            >
              See What We're About
            </a>
          </div>

          <div className="mt-16 flex justify-center space-x-6 [font-family:var(--font-primary)]">
            <div className="text-center">
              <div className="text-4xl font-light text-white">So far...</div>
              <div className="mt-2 text-blue-200 font-extralight">5 cool people</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-white">1-2x</div>
              <div className="mt-2 text-blue-200 font-extralight">Weekly Hangouts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-white">∞</div>
              <div className="mt-2 text-blue-200 font-extralight">Good Vibes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}