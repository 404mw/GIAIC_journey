import { client } from "@/sanity/lib/client";

export interface Product {
  title: string;
  slug: { current: string };
  price: number;
  mainImg: string;
  alt: string;
}

export async function getLatestProducts(): Promise<Product[]> {
  const query = `*[_type == "products"] | order(_createdAt) {
    title,
    slug,
    price,
    "mainImg": mainImg.asset->url,
    "alt": mainImg.alt
  }`;

  const products: Product[] = await client.fetch(query)
  return products;
}
