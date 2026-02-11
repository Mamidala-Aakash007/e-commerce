import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";

const AddToWishlistButton = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div className={cn(`absolute top-2 right-0`, className)}>
      <div className={`p-2.5 rounded-full hover:bg-shop_dark_green hover:text-white hoverEffect bg-shop_light_pink`}>
        <Heart size={15}/>
      </div>
    </div>
  );
};

export default AddToWishlistButton;
