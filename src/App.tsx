import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-4 text-lg">
      <Button
        className="w-[200px]"
        variant={"outline"}
        disabled
        onClick={() => setCount((count) => count + 1)}
      >
        Далее
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="bg-accent px-[30px] py-5">
            <DialogTitle>Вход</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2 p-[30px]">
            <div className="grid flex-1 gap-2"></div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">aaaaa</Button>
        </DialogTrigger>
        <DialogContent className="min-w-full top-0 translate-y-0 rounded-none sm:max-w-md">
          <DialogHeader className="px-[30px] py-[26px]">
            <DialogTitle>Вход</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
