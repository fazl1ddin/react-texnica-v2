import { cn } from "@/shared/lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn("text-4xl font-bold", className)} {...props}>
      {children}
    </h1>
  );
};

export { Title };
