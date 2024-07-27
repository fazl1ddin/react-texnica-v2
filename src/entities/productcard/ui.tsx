import { Product } from "@/shared/components/ui/product";
import { ProductType } from "@/shared/model";
import React from "react";
import { Tag } from "./tags";
import { calcPrice, formatCash } from "@/shared/lib/utils";

interface ProductCardProps extends ProductType {
  priceLeft?: React.ReactNode;
  rates?: React.ReactNode;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <>
      {props.waterproof && (
        <p className="text-lg text-primary absolute">Аквазащита.</p>
      )}
      <Tag tags={props.tags} />
      <Product
        title={props.description.title}
        id={0}
        image={props.image[0]}
        name={props.specification.productName}
      />

      <div>
        {props.rates}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-grey font-bold line-through leading-5">
              {Boolean(props.sale) && formatCash(props.price)}
            </p>
            <p className="font-bold text-2xl leading-8">
              {formatCash(calcPrice(props.sale, props.price))}
            </p>
            {Boolean(props.sale) && (
              <p className="h-6 bg-orange rounded-full text-white text-sm font-bold py-[3px] px-2 leading-[18px] text-end flex justify-start gap-[5px]">
                <span className="rounded-full bg-white text-black font-normal px-1">
                  {props.sale}%
                </span>
                <span>
                  —&nbsp;
                  {formatCash(props.price - calcPrice(props.sale, props.price))}
                </span>
              </p>
            )}
          </div>
          {props.priceLeft}
        </div>

        {props.children}
      </div>
    </>
  );
};

export { ProductCard };
