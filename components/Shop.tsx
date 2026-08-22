"use client";
import { BRANDS_QUERY_RESULT, Category } from "@/sanity.types";
import Container from "./Container";
import { Title } from "./text";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERY_RESULT;
}

const Shop = ({ categories, brands }: Props) => {
  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between">
            <Title className="text-lg uppercase tracking-wide">
              Get the products as your needs
            </Title>
            <button className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-shop_orange hoverEffect">
              Reset Filter
            </button>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
