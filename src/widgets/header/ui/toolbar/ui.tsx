import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Counters } from "../counters";

const LoupeSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-3"
  >
    <path
      d="M13 19C8.58172 19 5 15.4183 5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z"
      stroke="#838688"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.99961 21.0004L7.34961 16.6504"
      stroke="#838688"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Toolbar = () => {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <div className="border-b border-b-border-once flex items-center justify-center px-3 pt-[6px] pb-3 cursor-pointer">
            <LoupeSVG />
            Поиск
          </div>
        </DialogTrigger>
        <DialogContent className="min-w-full top-0 translate-y-0 rounded-none sm:max-w-md">
          <DialogHeader className="px-[30px] py-[26px]">
            <DialogTitle>Вход</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Counters />
    </div>
  );
};

export { Toolbar };
