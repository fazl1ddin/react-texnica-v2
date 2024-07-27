interface ProductImageProps {
  url: string | undefined;
}

const ProductImage: React.FC<ProductImageProps> = ({ url }) => {
  return (
    <div className="flex items-end w-[286px] h-[224px]">
      <img className="w-full" src={url} alt="Error" />
    </div>
  );
};

export { ProductImage };
