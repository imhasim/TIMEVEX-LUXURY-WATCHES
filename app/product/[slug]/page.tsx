import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import ProductDetailClient from "@/components/product/ProductDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Watch Not Found | TimeVex",
    };
  }

  return {
    title: `${product.name} | TimeVex Luxury Watches`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${product.brand}`,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
