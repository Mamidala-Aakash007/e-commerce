"use client";
import { Category, Product } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { set } from "sanity";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";

interface Props {
  categories: Category[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (NewSlug: string) => {
    if (NewSlug === currentSlug) return; // Prevent unnecessary reload if the same category is clicked
    setCurrentSlug(NewSlug);
    router.push(`/category/${NewSlug}`, { scroll: false }); // Update the URL without scrolling to the top, allowing the user to stay in their current position on the page.
  };

  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `*[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc){...,"categories": categories[]->title}`;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products for category", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(currentSlug);
  }, [router, currentSlug]);
  return (
    <div className="py-5 flex f lex-col md:flex-row items-start gap-5">
      <div className="flex flex-col md:min-w-40 border">
        {categories?.map((item) => (
          <Button
            onClick={() => handleCategoryChange(item?.slug?.current as string)}
            key={item._id}
            className={`bg-transparent border-0 p-0 rounded-none text-darkColor shadow-none hover:bg-shop_orange hover:text-white font-semibold transition hoverEffect border-b last:border-b-0 capitalize ${item?.slug?.current === currentSlug && "bg-shop_orange text-white border-shop_orange"}`}
          >
            <p className="w-full text-left px-2">{item?.title}</p>
          </Button>
        ))}
      </div>
      <div className="flex-1">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full">
            <div className="flex items-center space-x-2 text-blue-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Product is Loading...</span>
            </div>
          </div>
        ) : products?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {products?.map((product: Product) => (
              <AnimatePresence key={product._id}>
                <motion.div>
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <NoProductAvailable
            selectedTab={currentSlug}
            className="mt-0 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
