import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  slug: { current: string };
  price: number;
  mainImg: string;
  alt?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col justify-between">
      <Link href={`/shop/product/${product.title.replace(/\s+/g, "-").toLowerCase()}`} className="m-auto">
        <Image
          className="m-auto hover:scale-110 transform transition duration-300 pb-4"
          src={product.mainImg}
          alt={product.alt || "Product image"}
          width={287}
          height={287}
          priority
        />
      </Link>
      <div>
        <h1 className="text-lg font-semibold">{product.title}</h1>
        <h2 className="text-gray-600">{product.price.toFixed(2)} USD</h2>
      </div>
    </div>
  );
}
