import { productType } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  selectedTab?: string;
  onTabSelect?: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType.map((item) => (
          <Button
            className={`rounded-full border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 bg-shop_light_green/10 hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedTab === item.title ? "bg-shop_light_green text-white border-shop_light_green" : ""}`}
            key={item.value}
            variant="outline"
            size="sm"
            onClick={() => {
              onTabSelect?.(item?.title);
            }}
          >
            {item?.title}
          </Button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className="rounded-full border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 bg-shop_light_green/10 hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
