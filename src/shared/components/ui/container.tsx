import { cn } from "@/shared/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("max-w-[1300px] mx-auto", className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
