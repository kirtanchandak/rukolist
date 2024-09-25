import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  MdOutlineMailOutline,
  MdOutlinePeopleOutline,
  MdOutlineShare,
} from "react-icons/md";

export default function Hero() {
  return (
    <>
      <div className=" bg-primary">
        <Navbar />
        <div className="md:pt-24 pt-8 px-2">
          <h1 className="md:text-6xl text-4xl font-extrabold text-center text-secondary">
            Launch Your Waitlist in Minutes
          </h1>
          <p className=" text-gray-300 md:text-xl text-sm text-center mt-3">
            Create, manage, grow, share your waitlist effortlessly and watch
            your audience build.
          </p>
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
          <section className="py-12 md:py-28 lg:py-36">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
                Why Choose WaitlistPro?
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <MdOutlineMailOutline className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-lg font-bold text-white">
                    Easy Email Collection
                  </h3>
                  <p className="text-sm text-white">
                    Collect emails with a simple, customizable form
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MdOutlinePeopleOutline className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-lg font-bold text-white">
                    Audience Insights
                  </h3>
                  <p className="text-sm text-white">
                    Gain valuable insights about your growing audience
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MdOutlineShare className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-lg font-bold text-white">Easy Sharing</h3>
                  <p className="text-sm text-white">
                    Share your unique URL across all platforms
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:pb-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Ready to Launch Your Waitlist?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                    Get started in minutes and begin collecting emails for your
                    next big launch.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <button type="submit" className="bg-secondary p-2 rounded-md">
                    Get Started
                  </button>
                  <p className="text-xs text-gray-500 pt-2">
                    By signing up, you agree to our{" "}
                    <Link
                      className="underline underline-offset-2 text-secondary"
                      href="#"
                    >
                      Terms & Conditions
                    </Link>
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
