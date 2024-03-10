import { cn } from "@/lib/utils";

interface Typography extends React.HTMLAttributes<HTMLParagraphElement> {}

const Typography: React.FC<Typography> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={cn("font-medium", className)} {...props}>
      {children}
    </p>
  );
};

const Contacts = () => {
  return (
    <div className="flex items-center justify-center gap-5 md:hidden">
      <Typography>+7 (812) 660-50-54</Typography>
      <Typography>+7 (958) 111-95-03</Typography>
      <Typography className="text-grey">Пн-вс: с 10:00 до 21:00</Typography>
    </div>
  );
};

export { Contacts };
