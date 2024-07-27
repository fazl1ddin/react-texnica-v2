import { Link } from "@tanstack/react-router";
import React from "react";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  title: string;
}

const Product: React.FC<ProductProps> = ({ id, image, name, title }) => {
  return (
    <>
      <div>
        <Link
          to={`/product/${id}`}
          className="flex items-end w-[286px] h-[224px] mb-2.5"
        >
          <img className="w-full mb-4" src={image} alt="Error" />
        </Link>
        <h5 className="text-grey text-md leading-5">{name}</h5>

        <p className="text-xl mt-2.5 leading-[10px]">{title}</p>
      </div>
    </>
  );
};

export { Product };
