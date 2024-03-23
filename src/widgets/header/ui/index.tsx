import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Contacts } from "./contacts";
import { Logo } from "./logo";
import { Toolbar } from "./toolbar";
import { Button } from "@/components/ui/button";
import { SingInForm, SingUpForm } from "./forms/ui";
import { AuthProvider } from "../model";
import { AuthModel } from "@/shared/api";
import { UserDropDown } from "./userdropdown";

const Header = () => {
  const [isSingIn, setIsSingIn] = React.useState(true);
  const [auth, setAuth] = React.useState<AuthModel | null>(null);

  const handlerForm = () => {
    setIsSingIn((prevstate) => !prevstate);
  };

  const handlerModal = () => {
    setIsSingIn(true);
  };

  return (
    <div className="py-[10px] flex items-center justify-between">
      <Logo />
      <Contacts />
      <Toolbar />
      <AuthProvider
        value={{
          auth,
          setAuth,
        }}
      >
        {!auth ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-[26.5px]">Войти</Button>
            </DialogTrigger>
            <DialogContent
              className="w-[370px] sm:max-w-md"
              onCloseAutoFocus={handlerModal}
            >
              <DialogHeader className="bg-accent px-[30px] py-5">
                <DialogTitle className="text-start">
                  {isSingIn ? "Вход" : "Регистрация"}
                </DialogTitle>
              </DialogHeader>
              <div className={"px-[30px] py-[15px]"}>
                {isSingIn ? <SingInForm /> : <SingUpForm />}
              </div>
              <p
                className="px-[30px] pb-[30px] text-center text-primary cursor-pointer"
                onClick={handlerForm}
              >
                {isSingIn ? "Зарегистрироваться" : "Я уже зарегистрирован"}
              </p>
            </DialogContent>
          </Dialog>
        ) : (
          <UserDropDown />
        )}
      </AuthProvider>
    </div>
  );
};

export { Header };
