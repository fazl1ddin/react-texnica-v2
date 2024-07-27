import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";
import { Tag as TagType } from "@/shared/api";

interface TabProps {
  tags: TagType[] | undefined;
}

const tagsContent: Map<
  TagType,
  { className: string; content: React.ReactNode; variant: "default" | "danger" }
> = new Map([
  [
    "new",
    {
      className: "",
      content: "Новинка",
      variant: "default",
    },
  ],
  [
    "bestseller",
    {
      className: "",
      content: "Хит продаж",
      variant: "danger",
    },
  ],
]);

const Tag: React.FC<TabProps> = ({ tags }) => {
  return (
    <div className="absolute right-[10px] top-[10px] flex flex-col gap-2 justify-end items-end">
      {tags?.map((tag) => {
        const gotContent = tagsContent.get(tag);
        return (
          <Badge
            key={tag}
            className={cn(gotContent?.className)}
            variant={gotContent?.variant}
          >
            {gotContent?.content}
          </Badge>
        );
      })}
    </div>
  );
};

export { Tag };
