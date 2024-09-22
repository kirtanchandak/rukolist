import Link from "next/link";
import ProductPagePreview from "./ProductPreviewPage";

interface ProductProps {
  productname: string;
}

export default function Product({ productname }: ProductProps) {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">{productname}</h1>
        <Link href={`/${productname}`} target="_blank" className="mt-4">
          <p className="text-md">Preview -</p>
          <div className="mx-auto w-[1200px] h-[600px] shadow-xl rounded-2xl mt-2">
            <ProductPagePreview productname={productname} />
          </div>
        </Link>
      </div>
    </>
  );
}
