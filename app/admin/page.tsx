import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductList from "@/components/Products";

const Dashboard = () => {
  return (
    <>
      <div className=" bg-primary">
        <Navbar />
        <ProductList />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
