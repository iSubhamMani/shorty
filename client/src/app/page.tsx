import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Particles } from "@/components/magicui/particles";
import { Toaster } from "@/components/ui/sonner";
import URLShortener from "@/components/URLShortner";

export default function ShortyHomepage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-100">
      <Particles
        className="absolute inset-0 z-0"
        quantity={70}
        ease={80}
        color={"#000000"}
        refresh
      />
      <div
        className="absolute rounded-full filter blur-[100px] opacity-60"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-150px",
          left: "-150px",
          background:
            "radial-gradient(circle at center, #FFD700, #FF8C00, #FF4500)", // Gold, Dark Orange, Orange Red
          zIndex: 0,
        }}
      ></div>

      <div
        className="absolute rounded-full filter blur-[100px] opacity-60"
        style={{
          width: "350px",
          height: "350px",
          top: "-100px",
          right: "-100px",
          background:
            "radial-gradient(circle at center, #ADD8E6, #87CEEB, #1E90FF)", // Light Blue, Sky Blue, Dodger Blue
          zIndex: 0,
        }}
      ></div>
      <Toaster />
      <Header />

      {/* Hero Section */}
      <main className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-6 tracking-tighter">
            MAKE IT
            <br />
            <span className="text-gray-500">SHORT</span>
          </h2>

          {/* URL Shortener Component */}
          <URLShortener />

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-black mx-auto mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <span className="text-white text-2xl font-black">⚡</span>
              </div>
              <h3 className="text-xl font-black text-black mb-2">
                LIGHTNING FAST
              </h3>
              <p className="text-gray-600 font-medium">
                Shorten URLs in seconds
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black mx-auto mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <span className="text-white text-2xl font-black">🔒</span>
              </div>
              <h3 className="text-xl font-black text-black mb-2">
                SECURE & SAFE
              </h3>
              <p className="text-gray-600 font-medium">
                Your links are protected
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black mx-auto mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <span className="text-white text-2xl font-black">♾️</span>
              </div>
              <h3 className="text-xl font-black text-black mb-2">
                UNLIMITED USE
              </h3>
              <p className="text-gray-600 font-medium">
                Shorten as many as you need
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
