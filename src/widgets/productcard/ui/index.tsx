import React from "react";
import { CartButton } from "@/widgets/productcard/ui/button/cartbutton";
import { CompareButton } from "@/widgets/productcard/ui/button/comparebutton";
import { LikeButton } from "@/widgets/productcard/ui/button/likebutton";
import { ProductImage } from "./image";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/shared/api";
import { Loader } from "lucide-react";
import { Tag } from "./tag";
import { Button } from "@/components/ui/button";
import { calcPrice, formatCash } from "@/lib/utils";

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
      {data?.waterproof && (
        <p className="text-lg text-primary absolute">Аквазащита.</p>
      )}
      <Tag tags={data?.tags} />
      <div>
        <ProductImage url={data?.image[0]} />
        <h5 className="text-grey text-md leading-5">
          {data?.specification.productName}
        </h5>

        <p className="text-xl mt-2">{data?.description.title}</p>
      </div>

      <div>
        <div className="flex gap-1.5 bg-white">
          {new Array(5).fill(null).map(() => {
            return <StarSVG />;
          })}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-grey font-bold line-through leading-5">
              {Boolean(data?.sale) && data && formatCash(data.price)}
            </p>
            <p className="font-bold text-2xl leading-8">
              {data && formatCash(calcPrice(data.sale, data.price))}
            </p>
            {Boolean(data?.sale) && (
              <p className="h-6 bg-orange rounded-full text-white text-sm font-bold py-[3px] px-2 leading-[18px] text-end flex justify-start gap-[5px]">
                <span className="rounded-full bg-white text-black font-normal px-1">
                  {data?.sale}%
                </span>
                <span>
                  —&nbsp;
                  {data &&
                    formatCash(data.price - calcPrice(data.sale, data.price))}
                </span>
              </p>
            )}
          </div>
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
        </div>
        <div className="flex justify-between items-center gap-2.5 mt-5">
          <Button variant={"outline"} className="w-full font-semibold">
            Купить в 1 клик
          </Button>
          <CartButton
            onClick={() => {
              setIsActive((prev) => !prev);
            }}
            active={isActive}
          />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
