import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/shared/api";
import { Loader } from "lucide-react";
import { Tag } from "@/entities/tag";
import { ProductCard as DProductCard } from "@/entities/productcard";
import { calcPrice, formatCash } from "@/shared/lib/utils";
import { LikeButton } from "@/entities/likebutton";
import { CompareButton } from "@/entities/comparebutton";
import { Button } from "@/shared/components/ui/button";
import { CartButton } from "@/entities/cartbutton";

const StarSVG = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
        fill="#EAEAF0"
      />
    </svg>
  );
};

interface ProductCardProps {
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id }) => {
  const [isActive, setIsActive] = React.useState(false);

  const { data, isLoading } = useQuery({
    queryKey: [`product`, id],
    queryFn: () => getProduct({ id }),
  });

  return isLoading ? (
    <div className="w-1/4 flex items-center justify-center h-[596px]">
      <Loader className="h-[50px] w-[50px] animate-spin" />
    </div>
  ) : (
    <div className="p-5 border rounded-md relative flex flex-col justify-between gap-2.5 transition-shadow hover:shadow-md">
      {data && (
        <DProductCard
          {...data}
          priceLeft={
            <div className="flex gap-2.5">
              <LikeButton
                onClick={() => {
                  setIsActive((prev) => !prev);
                }}
                active={isActive}
              />
              <CompareButton
                onClick={() => {
                  setIsActive((prev) => !prev);
                }}
                active={isActive}
              />
            </div>
          }
          rates={
            <div className="flex gap-1.5 bg-white">
              {new Array(5).fill(null).map(() => {
                return <StarSVG />;
              })}
            </div>
          }
          children={
            <div className="flex justify-between items-center gap-2.5 mt-5">
              <Button variant={"outline"} className="w-full font-semibold">
                Купить в 1 клик
              </Button>
              <CartButton
                onClick={() => {
                  setIsActive((prev) => !prev);
                }}
                active={isActive}
              />
            </div>
          }
        />
      )}
    </div>
  );
};

export { ProductCard };
