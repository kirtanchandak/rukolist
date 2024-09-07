import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Hero() {
  return (
    <>
      <div className=" bg-primary">
        <Navbar />
        <div className="h-screen pt-24">
          <h1 className="text-4xl font-extrabold text-center text-secondary">
            Everything you need to launch. <br /> In one, simple link.
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
        </div>
        <Footer />
      </div>
    </>
  );
}
