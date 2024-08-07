import { Title } from "@/shared/components/ui/title";
import { ProductCard } from "@/feautures/productcard";
import { Link } from "@tanstack/react-router";

const PolygonSVG = () => {
  return (
    <svg
      width="6"
      height="11"
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.68907 5.20829C5.85749 5.3663 5.85749 5.6337 5.68907 5.79171L0.673684 10.4971C0.418255 10.7368 1.378e-07 10.5557 1.33623e-07 10.2054L2.14003e-08 0.794595C1.72237e-08 0.444349 0.418255 0.263239 0.673684 0.502881L5.68907 5.20829Z"
        fill="#2A5275"
      />
    </svg>
  );
};

interface MainCategoryProps extends React.HTMLAttributes<HTMLHeadElement> {
  title: string;
}

const MainCategory: React.FC<MainCategoryProps> = ({ title }) => {
  return (
    <>
      <div className="flex items-end mb-10">
        <Title className="leading-[47px]">{title}</Title>
        <Link className="flex items-end text-md leading-4 mb-[7.5px] ml-[30px]">
          Все товары&nbsp;
          <PolygonSVG />
        </Link>
      </div>
      <div className="flex">
        <ProductCard id={1} />
        <ProductCard id={2} />
        <ProductCard id={4} />
        <ProductCard id={5} />
      </div>
    </>
  );
};

export { MainCategory };
