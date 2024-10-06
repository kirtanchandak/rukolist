import Link from "next/link";
import ProductPagePreview from "./ProductPreviewPage";
import ProductDetailsPage from "@/app/admin/[productname]/page";

interface ProductProps {
  productname: string;
}

export default function Product({ productname }: ProductProps) {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">{productname}</h1>
        <Link href={`/${productname}`} target="_blank" className="text-md">
          Preview
        </Link>
      </div>
    </>
  );
}
