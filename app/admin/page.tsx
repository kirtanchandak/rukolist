import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { PiBookThin } from "react-icons/pi";
import { PiCardsThreeThin } from "react-icons/pi";
import Product from "@/components/dashboard/Product";
import Emails from "@/components/dashboard/Emails";
import { IoIosLogOut } from "react-icons/io";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductList from "@/components/Products";

const Dashboard = () => {
  // const searchParams = useSearchParams();
  // const section = searchParams.get("section") || "product";
  // const [activeTab, setActiveTab] = useState(section);

  // useEffect(() => {
  //   setActiveTab(section);
  // }, [section]);

  // let ContentComponent;
  // switch (section) {
  //   case "emails":
  //     ContentComponent = Emails;
  //     break;
  //   default:
  //     ContentComponent = Product;
  //     break;
  // }

  // const tabs = [
  //   {
  //     id: "product",
  //     label: "Product",
  //     href: "/admin?section=product",
  //     icon: <PiBookThin />,
  //   },
  //   {
  //     id: "emails",
  //     label: "Emails",
  //     href: "/admin?section=emails",
  //     icon: <PiCardsThreeThin />,
  //   },
  // ];

  return (
    <>
      <div className=" bg-primary">
        <Navbar />
        <ProductList />
        <Footer />
      </div>
    </>
    // <div className="relative overflow-hidden min-h-screen">
    //   <div className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
    //     <div className="flex flex-col justify-between h-full">
    //       <div className="flex-grow">
    //         <div className="px-4 py-6 border-b">
    //           <div className="flex items-center justify-center">
    //             <Image width={50} height={50} src="" alt="logo" />
    //             <Link href="/" className="text-2xl font-normal">
    //               rukolist
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="p-4">
    //           <div className="flex flex-col gap-1">
    //             {tabs.map((tab) => (
    //               <Link
    //                 key={tab.id}
    //                 href={tab.href}
    //                 onClick={() => setActiveTab(tab.id)}
    //                 className={`flex items-center rounded-xl text-sm font-normal py-3 px-4 gap-4 ${
    //                   activeTab === tab.id
    //                     ? "bg-[#333333] text-white"
    //                     : "text-gray-600"
    //                 }`}
    //               >
    //                 {tab.icon} {tab.label}
    //               </Link>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //       <div className=" p-4">
    //         <div className="flex items-center ml-2">
    //           <IoIosLogOut className="text-black text-xl" />
    //           <span className="font-medium text-sm ml-2">Logout</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <main className="ml-60 pt-16 max-h-screen overflow-auto">
    //     <ContentComponent />
    //   </main>
    // </div>
  );
};

export default Dashboard;
