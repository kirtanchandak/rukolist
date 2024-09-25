import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Mail, Users, Share2, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className=" bg-primary">
        <Navbar />
        <div className="pt-16">
          <h1 className="text-6xl font-extrabold text-center text-secondary">
            Launch Your Waitlist <br /> in Minutes
          </h1>
          <form className="flex flex-col items-center space-y-4 mt-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <span className="px-4 py-2 text-secondary">rukolist.com/</span>
              <input
                type="text"
                className="flex-1 focus:outline-none bg-primary text-secondary"
                placeholder="yourproduct"
                required
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-secondary text-primary rounded-full flex items-center gap-1"
            >
              Launch now <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </form>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
                Why Choose WaitlistPro?
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <Mail className="h-12 w-12 mb-4 text-indigo-300" />
                  <h3 className="text-lg font-bold text-white">
                    Easy Email Collection
                  </h3>
                  <p className="text-sm text-indigo-200">
                    Collect emails with a simple, customizable form
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 mb-4 text-indigo-300" />
                  <h3 className="text-lg font-bold text-white">
                    Audience Insights
                  </h3>
                  <p className="text-sm text-indigo-200">
                    Gain valuable insights about your growing audience
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Share2 className="h-12 w-12 mb-4 text-indigo-300" />
                  <h3 className="text-lg font-bold text-white">Easy Sharing</h3>
                  <p className="text-sm text-indigo-200">
                    Share your unique URL across all platforms
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
