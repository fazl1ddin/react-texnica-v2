import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Counters } from "../counters";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

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
          <Container className="w-[1300px]">
            <DialogHeader className="py-4">
              <DialogTitle className="text-md font-normal">
                <div className="mr-12">
                  <Input
                    placeholder="Введите запрос, например «Smart balance»"
                    className="border-primary"
                  />
                </div>
              </DialogTitle>
            </DialogHeader>
          </Container>
        </DialogContent>
      </Dialog>
      <div className="ml-2 mr-5">
        <Counters />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="px-[26.5px]">Войти</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="bg-accent px-[30px] py-5">
            <DialogTitle>Вход</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2 p-[30px]">
            <div className="grid flex-1 gap-2"></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { Toolbar };
